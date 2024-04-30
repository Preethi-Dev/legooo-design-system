import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import { findTokenValue } from "../../../utility";

const ArrowContainer = styled.div`
  display: inline-flex;
  padding: ${({ size }) => (size === "small" ? "0.375rem" : "0.6rem")};
  border-radius: 0.375rem;
  border: ${({ theme, disabled, size }) =>
    size === "small"
      ? "none"
      : `1px solid ${findTokenValue(theme[disabled ? "Pagination-colorTextDisabled" : "Pagination-colorBorder"], theme)}`};
  color: ${({ theme, disabled }) =>
    findTokenValue(
      theme[disabled ? "Pagination-colorTextDisabled" : "Pagination-colorText"],
      theme
    )};

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  &:hover {
    border: ${({ theme, disabled }) =>
      `1px solid ${findTokenValue(theme[disabled ? "Pagination-colorTextDisabled" : "Pagination-colorPrimaryHover"], theme)}`};
    color: ${({ theme, disabled }) =>
      findTokenValue(
        theme[
          disabled
            ? "Pagination-colorTextDisabled"
            : "Pagination-colorPrimaryHover"
        ],
        theme
      )};
  }
`;

export const PaginationArrow = ({ disabled, size, arrow }) => {
  return (
    <ArrowContainer disabled={disabled} size={size}>
      {arrow === "left" && <LeftOutlined />}
      {arrow === "right" && <RightOutlined />}
    </ArrowContainer>
  );
};
