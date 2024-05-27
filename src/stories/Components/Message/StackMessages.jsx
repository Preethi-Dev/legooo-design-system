import React, { useState } from "react";
import Button from "../Button";
import { Atom } from "./Atom";
import styled, { css, keyframes } from "styled-components";
import { nanoid } from "nanoid";

const slideInTop = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const Container = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const MessagesContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 1rem;
`;

const AtomContainer = styled.div`
  animation: ${() => css`
    ${slideInTop} 600ms forwards
  `};
`;

export const StackMessages = (props) => {
  const [atoms, setAtoms] = useState([]);

  const handleClick = (e) => {
    const newAtom = {
      id: nanoid(),
      type: "success",
      content: "This is Message 🎉",
    };

    setAtoms([...atoms, newAtom]);

    // Optionally, remove the Atom component after 3 seconds
    setTimeout(() => {
      setAtoms((prevAtoms) => {
        return prevAtoms.filter((atom) => atom.id !== newAtom.id);
      });
    }, 3000);
  };

  return (
    <>
      <Container>
        <MessagesContainer>
          {atoms.map((atom) => (
            <AtomContainer key={atom.id}>
              <Atom content={atom.content} type={atom.type} />
            </AtomContainer>
          ))}
        </MessagesContainer>
      </Container>
      <div onClick={handleClick}>
        <Button
          $shape="Default"
          $size="Default"
          $type="Primary"
          label="Display Normal Message"
        />
      </div>
    </>
  );
};
