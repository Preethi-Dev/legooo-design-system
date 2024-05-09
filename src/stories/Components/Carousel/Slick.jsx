import React from "react";
import styled from "styled-components";

const SlickDot = styled.div`
  height: ${({ $dotPosition, $active }) =>
    ["Top", "Bottom"].includes($dotPosition)
      ? "3px"
      : $active
        ? "1.5rem"
        : "1rem"};
  width: ${({ $dotPosition, $active }) =>
    ["Top", "Bottom"].includes($dotPosition)
      ? $active
        ? "1.5rem"
        : "1rem"
      : "3px"};

  border-radius: 0.0625rem;
  opacity: ${({ $active }) => ($active ? "1" : "0.3")};
  background: #fff;
  cursor: pointer;
`;

export const Slick = (props) => {
  return <SlickDot {...props}></SlickDot>;
};
