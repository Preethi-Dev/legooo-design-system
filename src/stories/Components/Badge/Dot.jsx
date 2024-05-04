import React from "react";
import styled, { css } from "styled-components";
import { findTokenValue } from "../../../utility";
import { generateBadgeBgColor } from "./Badge.helpers";

const PositionDot = css`
  position: absolute;
  top: ${({ offset }) => (offset ? `${offset[0]}px` : "2px")};
  right: ${({ offset }) => (offset ? `${offset[1]}px` : "2px")};
  transform: translate(50%, -50%);
  transform-origin: 100% 0%;
`;

const DotWrapper = styled.div`
  width: 0.375rem;
  height: 0.375rem;
  display: inline-flex;

  background-color: ${({ theme, $status, color }) =>
    color || findTokenValue(theme[generateBadgeBgColor($status)], theme)};
  border-radius: 6.25rem;

  ${PositionDot}
`;

export const Dot = (props) => {
  return <DotWrapper {...props}></DotWrapper>;
};
