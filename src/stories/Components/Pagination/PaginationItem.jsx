import React from "react";
import styled, { css } from "styled-components";
import { GlobalStyle, findTokenValue } from "../../../utility";

const disabledItem = css`
  color: ${({ theme }) =>
    findTokenValue(theme["Pagination-colorTextDisabled"], theme)};
  background: ${({ theme, size, $active }) =>
    size === "small"
      ? "none"
      : findTokenValue(
          theme[
            $active
              ? "Pagination-controlItemBgActiveDisabled"
              : "Pagination-colorBgContainerDisabled"
          ],
          theme
        )};
  cursor: not-allowed;
  border-color: ${({ theme }) =>
    findTokenValue(theme["Pagination-colorBgContainerDisabled"], theme)};
`;

const activeItem = css`
  font-weight: bold;
  color: ${({ theme, disabled }) =>
    findTokenValue(
      theme[
        disabled
          ? "Pagination-colorBgContainer"
          : "Pagination-colorPrimaryHover"
      ],
      theme
    )};

  border: ${({ size, theme }) =>
    size === "small"
      ? "none"
      : `1px solid ${findTokenValue(theme["Pagination-colorPrimaryHover"], theme)}`};
`;

const Item = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  padding: ${({ theme, size }) =>
    size === "small"
      ? "0.0625rem 0.5rem"
      : `${findTokenValue(theme["Pagination-paddingXS"], theme)}px ${findTokenValue(theme["Pagination-paddingSM"], theme)}px`};
  color: ${({ theme }) => findTokenValue(theme["Pagination-colorText"], theme)};
  border-radius: ${({ theme }) =>
    findTokenValue(theme["Pagination-borderRadius"], theme)}px;
  border: ${({ size, theme }) =>
    size === "small"
      ? "none"
      : `1px solid ${findTokenValue(theme["Pagination-colorBorder"], theme)}`};
  background: ${({ theme, size }) =>
    size === "small"
      ? "none"
      : findTokenValue(theme["Pagination-colorBgContainer"], theme)};
  display: inline-flex;
  cursor: pointer;

  &:hover,
  &:active {
    color: ${({ theme, disabled, $active }) =>
      findTokenValue(
        theme[
          disabled
            ? $active
              ? "Pagination-colorBgContainer"
              : "Pagination-colorTextDisabled"
            : "Pagination-colorPrimaryHover"
        ],
        theme
      )};
    border-color: ${({ theme, disabled }) =>
      findTokenValue(
        theme[
          disabled
            ? "Pagination-colorBgContainerDisabled"
            : "Pagination-colorPrimaryHover"
        ],
        theme
      )};
  }

  ${({ disabled }) => disabled && disabledItem}
  ${({ $active }) => $active && activeItem}
`;

export const PaginationItem = ({ item, $active, disabled, size }) => {
  return (
    <>
      <GlobalStyle />
      <Item $active={$active} disabled={disabled} size={size}>
        {item}
      </Item>
    </>
  );
};
