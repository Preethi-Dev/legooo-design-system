import React from "react";
import styled, { css } from "styled-components";
import { findTokenValue } from "../../../utility";
import { loading } from "./Skeleton.helpers";

const InputContainer = styled.div`
  padding: 0.75rem 0rem;
  width: 10rem;
  background-color: ${({ theme }) =>
    findTokenValue(theme["Skeleton-colorFillContent"], theme)};
  animation: ${({ $active }) =>
    $active &&
    css`
      ${loading} 1s linear infinite alternate
    `};
`;

export const SkeletonInput = ({ active }) => {
  return <InputContainer $active={active}></InputContainer>;
};
