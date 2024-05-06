import React from "react";
import styled from "styled-components";
import { GlobalStyle, findTokenValue } from "../../../utility";

const CellContainer = styled.div`
  display: flex;
  width: ${({ mode }) => (mode === "year" ? "18.5rem" : "7.625rem")};
  height: 7.25rem;
  padding: 0.25rem 0.5rem;
  flex-direction: column;
  align-items: flex-end;
  cursor: pointer;

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
  color: ${({ theme, $selected, $inView }) =>
    findTokenValue(
      theme[
        $inView
          ? $selected
            ? "Calendar-colorLink"
            : "Calendar-colorText"
          : "Calendar-colorTextDisabled"
      ],
      theme
    )};
  background-color: ${({ theme, $selected }) =>
    findTokenValue(
      theme[
        $selected ? "Calendar-controlItemBgActive" : "Calendar-colorBgContainer"
      ],
      theme
    )};

  border-top: 2px solid
    ${({ theme, $today }) =>
      $today
        ? findTokenValue(theme["Calendar-colorPrimary"], theme)
        : "#f0f0f0"};

  &:hover {
    background-color: ${({ theme, $selected }) =>
      findTokenValue(
        theme[
          $selected
            ? "Calendar-controlItemBgActive"
            : "Calendar-controlItemBgHover"
        ],
        theme
      )};
  }
`;

export const DataCell = (props) => {
  return (
    <CellContainer {...props}>
      <GlobalStyle />
      {props.$day}
    </CellContainer>
  );
};
