import React from "react";
import styled from "styled-components";
import { findTokenValue } from "../../../utility";

const Tail = styled.div`
  height: ${({ direction, $progressDot }) =>
    direction === "vertical"
      ? $progressDot
        ? "5rem"
        : "2.5rem"
      : direction === "horizontal" && "1px"};
  width: ${({ direction }) =>
    direction === "vertical" ? "1px" : direction === "horizontal" && "100%"};

  background-color: ${({ theme, $status }) =>
    findTokenValue(
      theme[$status === "finished" ? "Steps-colorPrimary" : "Steps-colorSplit"],
      theme
    )};
`;

export const StepsTail = (props) => {
  return <Tail {...props}></Tail>;
};
