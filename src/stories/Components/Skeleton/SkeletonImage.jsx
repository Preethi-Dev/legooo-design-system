import React from "react";
import styled, { css } from "styled-components";
import { findTokenValue } from "../../../utility";
import { loading } from "./Skeleton.helpers";
import { Image } from "./Image";

const ImageContainer = styled.div`
  display: inline-flex;
  padding: 1.5rem;
  background-color: ${({ theme }) =>
    findTokenValue(theme["Skeleton-colorFillContent"], theme)};
  animation: ${({ $active }) =>
    $active &&
    css`
      ${loading} 1s linear infinite alternate
    `};
`;

export const SkeletonImage = ({ active }) => {
  return (
    <ImageContainer $active={active}>
      <Image />
    </ImageContainer>
  );
};
