import React from "react";
import styled from "styled-components";
import { GlobalStyle, findTokenValue } from "../../../utility";

const MetaContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`;

const Title = styled.p`
  color: ${({ theme }) =>
    findTokenValue(theme["Card-colorTextHeading"], theme)};
  font-size: 1rem;
  font-weight: 400;
`;
const Description = styled.p`
  color: ${({ theme }) =>
    findTokenValue(theme["Card-colorTextDescription"], theme)};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
`;

export const Meta = ({ title, description }) => {
  return (
    <MetaContainer>
      <GlobalStyle />
      {title && <Title>{title}</Title>}
      {description && <Description>{description}</Description>}
    </MetaContainer>
  );
};
