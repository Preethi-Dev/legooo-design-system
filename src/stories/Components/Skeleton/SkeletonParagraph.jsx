import React from "react";
import styled, { css } from "styled-components";
import { findTokenValue } from "../../../utility";
import { loading } from "./Skeleton.helpers";
import { nanoid } from "nanoid";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ParagraphContainer = styled.div`
  padding: 0.5rem 0rem;
  background-color: ${({ theme }) =>
    findTokenValue(theme["Skeleton-colorFillContent"], theme)};
  animation: ${({ $active }) =>
    $active &&
    css`
      ${loading} 1s linear infinite alternate
    `};
`;

export const SkeletonParagraph = ({ rows, active }) => {
  return (
    <Container>
      {[...new Array(rows)].map((_, index) => (
        <ParagraphContainer
          $active={active}
          style={{ width: index === rows - 1 ? "60%" : "100%" }}
          key={nanoid()}
        />
      ))}
    </Container>
  );
};

SkeletonParagraph.defaultProps = {
  rows: 3,
};
