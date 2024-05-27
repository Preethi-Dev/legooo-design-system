import React, { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { GlobalStyle, findTokenValue } from "../../../utility";
import {
  generateColorTokenByType,
  generateIconByType,
} from "./Message.helpers";

const MessageContainer = styled.div`
  display: inline-flex;
  padding: 0.625rem 1rem;
  align-items: center;
  gap: 0.5rem;

  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
  color: ${({ theme }) => findTokenValue(theme["Message-colorText"], theme)};
  background-color: ${({ theme }) =>
    findTokenValue(theme["Message-colorBgElevated"], theme)};
  border-radius: 0.125rem;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);

  & svg {
    color: ${({ theme, $type }) =>
      findTokenValue(theme[generateColorTokenByType($type)], theme)};
  }
`;

export const Atom = ({ content, icon, type = "info" }) => {
  return (
    <MessageContainer $type={type}>
      <GlobalStyle />
      {icon ? icon : generateIconByType(type)}
      {content && content}
    </MessageContainer>
  );
};
