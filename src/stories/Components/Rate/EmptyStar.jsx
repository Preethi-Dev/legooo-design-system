import React from "react";
import { RateStar } from "./RateStar";
import styled from "styled-components";
import { findTokenValue } from "../../../utility";

const EmptyStarContainer = styled.div`
  color: ${({ theme }) =>
    findTokenValue(theme["Rate-colorFillContent"], theme)};
`;

export const EmptyStar = (props) => {
  return (
    <EmptyStarContainer>
      <RateStar {...props} />
    </EmptyStarContainer>
  );
};
