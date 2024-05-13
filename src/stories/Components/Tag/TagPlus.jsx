import React from "react";
import styled from "styled-components";
import { GlobalStyle, findTokenValue } from "../../../utility";
import { PlusOutlined } from "@ant-design/icons";

const TagPlusContainer = styled.div`
  display: inline-flex;
  padding: 0.0625rem 0.5rem;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.125rem;
  border: 1px dashed
    ${({ theme }) => findTokenValue(theme["Tag-colorBorder"], theme)};
  background: transparent;
  box-shadow: 0px 2px 0px 0px
    ${({ theme }) => findTokenValue(theme["Tag-colorFillQuaternary"], theme)};

  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
  color: ${({ theme }) => findTokenValue(theme["Tag-colorTextHeading"], theme)};
  cursor: pointer;
`;

export const TagPlus = () => {
  return (
    <TagPlusContainer>
      <GlobalStyle /> <PlusOutlined /> New Tag
    </TagPlusContainer>
  );
};
