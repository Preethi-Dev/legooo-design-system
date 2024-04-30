import React from "react";
import styled from "styled-components";
import { findTokenValue } from "../../../utility";

const EllipsisContainer = styled.div`
  display: inline-flex;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: 0.125rem;
  color: ${({ theme }) =>
    findTokenValue(theme["Pagination-colorTextPlaceholder"], theme)};
`;

const PaginationItemEllipsis = () => {
  return <EllipsisContainer>...</EllipsisContainer>;
};

export default PaginationItemEllipsis;
