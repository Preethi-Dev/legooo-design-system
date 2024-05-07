import React from "react";
import styled from "styled-components";
import { GlobalStyle, findTokenValue } from "../../../utility";

const HeadContainer = styled.div`
  display: flex;
  padding: ${({ $size }) => ($size === "small" ? ".5rem 1rem" : "1rem 1.5rem")};
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => findTokenValue(theme["Card-colorText"], theme)};

  a {
    text-decoration: none;
    color: ${({ theme }) => findTokenValue(theme["Card-colorPrimary"], theme)};
  }
`;

const Title = styled.p`
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
`;

export const CardHead = ({ $title, $extra, $size = "default" }) => {
  return (
    <HeadContainer $size={$size}>
      <GlobalStyle />
      <Title>{$title && $title}</Title>
      {$extra && $extra}
    </HeadContainer>
  );
};
