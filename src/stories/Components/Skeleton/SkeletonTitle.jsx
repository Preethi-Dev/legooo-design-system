import React from "react";
import styled, { css } from "styled-components";
import { findTokenValue } from "../../../utility";
import { loading } from "./Skeleton.helpers";

const TitleContainer = styled.div`
  padding: 0.5rem 0rem;
  width: 40%;
  margin-bottom: 1.5rem;
  background-color: ${({ theme }) =>
    findTokenValue(theme["Skeleton-colorFillContent"], theme)};
  animation: ${({ $active }) =>
    $active &&
    css`
      ${loading} 1s linear infinite alternate
    `};
`;

export const SkeletonTitle = ({ active }) => {
  return <TitleContainer $active={active}></TitleContainer>;
};
