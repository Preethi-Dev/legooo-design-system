import React, { useState } from "react";
import styled from "styled-components";
import Tag from "./Tag";
import { TagPlus } from "./TagPlus";
import { nanoid } from "nanoid";
import { findTokenValue } from "../../../utility";

const TagGroup = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

const TagGeneratorContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Input = styled.input`
  max-width: 60px;
  padding: 0.0625rem;
  background: transparent;
  color: ${({ theme }) => findTokenValue(theme["Tag-colorTextHeading"], theme)};
`;

export const TagGenerator = ({ $theme = "Light" }) => {
  const [turnInput, setTurnInput] = useState(false);
  const [tagGroup, setTagGroup] = useState([]);

  const handleAddTag = () => {
    setTurnInput(true);
  };
  const handleSubmit = (e) => {
    if (e.key === "Enter" && e.target.value !== "") {
      setTagGroup([...tagGroup, e.target.value]);
      e.target.value = "";
    }
  };
  const hanldeBlur = () => {
    setTurnInput(false);
  };

  return (
    <TagGeneratorContainer>
      <TagGroup>
        <Tag closeIcon $bordered $theme={$theme} color="default">
          Tag 1
        </Tag>
        <Tag closeIcon $bordered $theme={$theme} color="default">
          Tag 2
        </Tag>
        <Tag closeIcon $bordered $theme={$theme} color="default">
          Tag 3
        </Tag>
        {tagGroup.map((tag) => (
          <Tag closeIcon $bordered color="default" key={nanoid()}>
            {tag}
          </Tag>
        ))}
      </TagGroup>

      {!turnInput && (
        <div onClick={handleAddTag}>
          <TagPlus />
        </div>
      )}
      {turnInput && (
        <Input autoFocus onKeyUp={handleSubmit} onBlur={hanldeBlur} />
      )}
    </TagGeneratorContainer>
  );
};
