import React from "react";
import styled from "styled-components";
import { findTokenValue } from "../../../utility";

const Divider = styled.div`
  color: ${({ theme }) =>
    findTokenValue(theme["Breadcrumb-colorTextDescription"], theme)};
  margin: ${({ theme }) =>
    findTokenValue(theme["Breadcrumb-marginXS"], theme)}px;
`;

export const Separator = ({ separator }) => {
  return <Divider>{separator || "/"}</Divider>;
};
