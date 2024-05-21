import React from "react";
import styled from "styled-components";
import { GlobalStyle, findTokenValue } from "../../../utility";

const TabContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;

  font-size: ${({ $size }) => ($size === "large" ? "1rem" : ".875rem")};
  font-style: normal;
  font-weight: 400;
  line-height: ${({ $size }) => ($size === "large" ? "1.5rem" : "1.375rem")};
  color: ${({ theme, $selected }) =>
    findTokenValue(
      theme[$selected ? "Tabs-colorPrimary" : "Tabs-colorText"],
      theme
    )};
  cursor: pointer;
  transition: all 0.1s ease-in;
  padding: ${({ $size }) => ($size === "large" ? "1rem 0" : ".75rem 0")};

  &:hover {
    color: ${({ theme }) =>
      findTokenValue(theme["Tabs-colorPrimaryHover"], theme)};
  }
`;

export const Tab = ({ label, size, icon, selected }) => {
  return (
    <TabContainer $size={size} $selected={selected}>
      <GlobalStyle />
      {icon && icon}
      {label && label}
    </TabContainer>
  );
};

Tab.defaultProps = {
  size: "medium",
  selected: false,
};
