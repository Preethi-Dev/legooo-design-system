import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, findTokenValue } from "../../../utility";
import { CloseOutlined } from "@ant-design/icons";
import {
  generateBgForTag,
  generateBorderClrForTag,
  generateColorForTag,
  defaultColors,
} from "./Tag.helpers";
import * as myThemes from "../../../tokens";

const TagContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.0625rem 0.5rem;
  border: ${({ theme, color, $bordered, $checkableTag }) =>
    defaultColors.includes(color)
      ? $bordered && !$checkableTag
        ? `1px solid ${findTokenValue(theme[generateBorderClrForTag(color)], theme)}`
        : "transparent"
      : "none"};
  border-radius: 0.125rem;
  background: ${({ theme, color, $checkableTag }) =>
    defaultColors.includes(color)
      ? $checkableTag
        ? "none"
        : findTokenValue(theme[generateBgForTag(color)], theme)
      : color};

  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
  color: ${({ theme, color, $checkableTag }) =>
    defaultColors.includes(color)
      ? $checkableTag
        ? findTokenValue(theme["Tag-colorText"], theme)
        : findTokenValue(theme[generateColorForTag(color)], theme)
      : findTokenValue(theme["Tag-colorTextLightSolid"], theme)};

  &:hover {
    cursor: ${({ $checkableTag }) => $checkableTag && "pointer"};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  font-size: 0.625rem;
  color: ${({ theme, color }) =>
    defaultColors.includes(color)
      ? findTokenValue(theme[generateColorForTag(color)], theme)
      : findTokenValue(theme["Tag-colorTextLightSolid"], theme)};
`;

const CloseIconWrapper = styled(IconWrapper)`
  cursor: pointer;
  color: ${({ theme }) =>
    findTokenValue(theme["Tag-colorTextDescription"], theme)};
`;

const Tag = ({
  closeIcon,
  icon,
  color,
  $bordered,
  $checkableTag,
  children,
  checked,
  $theme,
}) => {
  const [isTagVisible, setIsTagVisible] = useState(true);
  const [isTagActive, setIsTagActive] = useState(false);

  const handleClickOnClose = () => {
    setIsTagVisible(false);
  };

  const handleClickOnTag = () => {
    $checkableTag && setIsTagActive(!isTagActive);
  };

  useEffect(() => {
    checked && setIsTagActive(true);
  }, []);

  return (
    <ThemeProvider theme={myThemes[$theme]}>
      {isTagVisible && (
        <TagContainer
          color={color}
          $bordered={$bordered}
          $checkableTag={$checkableTag}
          onClick={handleClickOnTag}
          style={{
            backgroundColor: isTagActive && "#1677FF",
            color: isTagActive && "#fff",
          }}
        >
          <GlobalStyle />
          {icon && (
            <IconWrapper
              color={color}
              $checkableTag={$checkableTag}
              style={{
                color: isTagActive && "#fff",
              }}
            >
              {icon}
            </IconWrapper>
          )}
          {children}
          {closeIcon && (
            <CloseIconWrapper
              onClick={handleClickOnClose}
              style={{
                color: isTagActive && "#fff",
              }}
            >
              {closeIcon === true ? <CloseOutlined /> : closeIcon}
            </CloseIconWrapper>
          )}
        </TagContainer>
      )}
    </ThemeProvider>
  );
};

Tag.defaultProps = {
  closeIcon: true,
  color: "default",
  $bordered: true,
  $checkableTag: false,
  $theme: "Light",
};

export default Tag;
