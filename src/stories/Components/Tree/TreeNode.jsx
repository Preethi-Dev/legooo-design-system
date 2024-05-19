import React, { useState } from "react";
import styled from "styled-components";
import { GlobalStyle, findTokenValue } from "../../../utility";

const NodeContainer = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem;
  gap: 0.375rem;

  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
  color: ${({ theme, disabled }) =>
    findTokenValue(
      theme[disabled ? "Tree-colorTextDisabled" : "Tree-colorText"],
      theme
    )};
  border-radius: 0.25rem;
  background-color: ${({ theme, $isClicked }) =>
    $isClicked
      ? findTokenValue(theme["Tree-controlItemBgActiveHover"], theme)
      : "transparent"};

  &:hover {
    background-color: ${({ theme, $isClicked, disabled }) =>
      disabled
        ? "transparent"
        : findTokenValue(
            theme[
              $isClicked ? "Tree-controlItemBgActiveHover" : "Tree-colorSplit"
            ],
            theme
          )};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }
`;

export const TreeNode = ({ title, showIcon, icon, disabled }) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleNodeClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <NodeContainer
      onClick={handleNodeClick}
      $isClicked={isClicked}
      disabled={disabled}
    >
      <GlobalStyle />
      {showIcon && icon && icon}
      {title && title}
    </NodeContainer>
  );
};
