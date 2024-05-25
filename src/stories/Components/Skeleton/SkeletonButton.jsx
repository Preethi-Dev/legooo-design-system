import React from "react";
import styled, { css } from "styled-components";
import { findTokenValue } from "../../../utility";
import { loading } from "./Skeleton.helpers";

const ButtonContainer = styled.div`
  padding: 0.75rem 0rem;
  width: ${({ $block }) => ($block ? "100%" : "4rem")};
  background-color: ${({ theme }) =>
    findTokenValue(theme["Skeleton-colorFillContent"], theme)};
  animation: ${({ $active }) =>
    $active &&
    css`
      ${loading} 1s linear infinite alternate
    `};
`;

export const SkeletonButton = ({ active, block }) => {
  return <ButtonContainer $active={active} $block={block}></ButtonContainer>;
};
