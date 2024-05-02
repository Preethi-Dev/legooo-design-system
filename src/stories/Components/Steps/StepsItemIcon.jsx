import React from "react";
import styled from "styled-components";
import {
  generateStatusBgColor,
  generateStatusFgColor,
  generateStatusIcon,
} from "./Steps.helpers";
import { findTokenValue } from "../../../utility";

const IconContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${({ size }) => (size === "small" ? "1.5rem" : "2rem")};
  height: ${({ size }) => (size === "small" ? "1.5rem" : "2rem")};
  font-size: ${({ size }) => (size === "small" ? ".75rem" : "1rem")};
  border-radius: 2rem;
  background: ${({ theme, $status }) =>
    findTokenValue(theme[generateStatusBgColor($status)], theme)};
  color: ${({ theme, $status }) =>
    findTokenValue(theme[generateStatusFgColor($status)], theme)};
`;

export const StepsItemIcon = (props) => {
  return (
    <IconContainer {...props}>{generateStatusIcon({ ...props })}</IconContainer>
  );
};
