import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { findTokenValue } from "../../../utility";
import * as icons from "@ant-design/icons";
import { GlobalStyle } from "../../../utility/";
import { generateIconNames } from "./Button.helpers";

const btnDisabled = css`
  border-color: ${({ theme }) =>
    findTokenValue(theme["Button-colorBorder"], theme)};
  color: ${({ theme }) => findTokenValue(theme["colorTextDisabled"], theme)};
  background-color: ${({ theme }) =>
    findTokenValue(theme["Button-colorBgContainerDisabled"], theme)};
  cursor: not-allowed;
`;
const textLinkDisabled = css`
  background: none;
  border: none;
  color: ${({ theme }) => findTokenValue(theme["colorTextDisabled"], theme)};
`;

const primary = css`
  background-color: ${({ theme, $danger }) =>
    findTokenValue(
      theme[$danger ? "Button-colorError" : "Button-colorPrimary"],
      theme
    )};
  color: ${({ theme }) =>
    findTokenValue(theme["Button-colorTextLightSolid"], theme)};
  border: 1px solid
    ${({ theme, $danger }) =>
      findTokenValue(
        theme[$danger ? "Button-colorError" : "Button-colorPrimary"],
        theme
      )};

  &:hover,
  &:focus {
    border-color: ${({ theme, $danger }) =>
      findTokenValue(
        theme[
          $danger ? "Button-colorErrorBorderHover" : "Button-colorPrimaryHover"
        ],
        theme
      )};
    background-color: ${({ theme, $danger }) =>
      findTokenValue(
        theme[$danger ? "Button-colorErrorHover" : "Button-colorPrimaryHover"],
        theme
      )};
  }

  &:active {
    border-color: ${({ theme, $danger }) =>
      findTokenValue(
        theme[
          $danger ? "Button-colorErrorBorderHover" : "Button-colorPrimaryActive"
        ],
        theme
      )};
    background-color: ${({ theme, $danger }) =>
      findTokenValue(
        theme[
          $danger ? "Button-colorErrorActive" : "Button-colorPrimaryActive"
        ],
        theme
      )};
  }

  &:disabled {
    ${btnDisabled}
  }
`;

const defaultStyle = css`
  background-color: ${({ theme }) =>
    findTokenValue(theme["Button-colorBgContainer"], theme)};
  color: ${({ theme, $danger }) =>
    findTokenValue(
      theme[$danger ? "Button-colorError" : "Button-colorText"],
      theme
    )};
  border: 1px solid
    ${({ theme, $danger }) =>
      findTokenValue(
        theme[$danger ? "Button-colorError" : "Button-colorBorder"],
        theme
      )};

  &:hover,
  &:focus {
    color: ${({ theme, $danger }) =>
      findTokenValue(
        theme[$danger ? "Button-colorErrorHover" : "Button-colorPrimaryHover"],
        theme
      )};
    border-color: ${({ theme, $danger }) =>
      findTokenValue(
        theme[$danger ? "Button-colorErrorHover" : "Button-colorBorder"],
        theme
      )};
  }

  &:active {
    color: ${({ theme, $danger }) =>
      findTokenValue(
        theme[
          $danger ? "Button-colorErrorActive" : "Button-colorPrimaryActive"
        ],
        theme
      )};
    border-color: ${({ theme, $danger }) =>
      findTokenValue(
        theme[$danger ? "Button-colorErrorHover" : "Button-colorPrimaryActive"],
        theme
      )};
  }

  &:disabled {
    ${btnDisabled}
  }
`;

const dashed = css`
  ${defaultStyle}
  border-style: dashed;

  &:hover,
  &:focus {
    border-color: ${({ theme, $danger }) =>
      findTokenValue(
        theme[$danger ? "Button-colorErrorHover" : "Button-colorPrimaryHover"],
        theme
      )};
  }
  &:active {
    border-color: ${({ theme, $danger }) =>
      findTokenValue(
        theme[
          $danger ? "Button-colorErrorBorderHover" : "Button-colorPrimaryActive"
        ],
        theme
      )};
  }

  &:disabled {
    ${btnDisabled}
  }
`;

const text = css`
  ${defaultStyle}
  background: none;
  border: none;

  &:hover,
  &:focus {
    color: ${({ theme, $danger }) =>
      findTokenValue(
        theme[$danger ? "Button-colorErrorHover" : "Button-colorText"],
        theme
      )};
    background-color: ${({ theme }) =>
      findTokenValue(theme["Button-colorBgTextHover"], theme)};
  }

  &:active {
    color: ${({ theme, $danger }) =>
      findTokenValue(
        theme[$danger ? "Button-colorErrorActive" : "Button-colorText"],
        theme
      )};
    background-color: ${({ theme }) =>
      findTokenValue(theme["Button-colorBgTextHover"], theme)};
    border: 1px solid
      ${({ theme, $danger }) =>
        $danger
          ? findTokenValue(theme["Button-colorErrorBorderHover"], theme)
          : "transparent"};
  }

  &:disabled {
    ${textLinkDisabled}
  }
`;

const link = css`
  ${text}

  font-family: "Roboto", sans-serif;
  display: inline-block;
  text-decoration: none;
  color: ${({ theme, $danger }) =>
    findTokenValue(
      theme[$danger ? "Button-colorError" : "Button-colorPrimary"],
      theme
    )};

  &:hover,
  &:focus {
    background: none;
    color: ${({ theme, $danger }) =>
      findTokenValue(
        theme[$danger ? "Button-colorErrorHover" : "Button-colorPrimaryHover"],
        theme
      )};
  }

  &:active {
    background: none;
    color: ${({ theme, $danger }) =>
      findTokenValue(
        theme[
          $danger ? "Button-colorErrorActive" : "Button-colorPrimaryActive"
        ],
        theme
      )};
    border: none;
  }

  &:disabled {
    ${textLinkDisabled}
  }
`;

const borderRounded = css`
  border-radius: 624.9375rem;
`;

const borderDefault = css`
  border-radius: ${({ theme }) =>
    findTokenValue(theme["Button-borderRadius"], theme)}px;
`;

const btnDefaultSize = css`
  font-size: 0.875rem;
  line-height: 1.375rem;
  padding: 4px
    ${({ theme }) =>
      findTokenValue(theme["Button-paddingContentHorizontal"], theme)}px;
  ${borderDefault}
`;
const btnSmallSize = css`
  font-size: 0.875rem;
  line-height: 1.375rem;
  padding: 2px
    ${({ theme }) => findTokenValue(theme["Button-paddingXS"], theme)}px;
  border-radius: ${({ theme }) =>
    findTokenValue(theme["borderRadiusSM"], theme)}px;
`;
const btnLargeSize = css`
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 6px
    ${({ theme }) =>
      findTokenValue(theme["Button-paddingContentHorizontal"], theme)}px;
  border-radius: ${({ theme }) =>
    findTokenValue(theme["borderRadiusLG"], theme)}px;
`;

const width_100 = css`
  width: 100%;
`;

//global style
const StyledBtn = styled.button`
  &:hover {
    cursor: pointer;
  }

  ${(props) => {
    switch (props.$type) {
      case "Primary":
        return primary;
      case "Default":
        return defaultStyle;
      case "Dashed":
        return dashed;
      case "Text":
        return text;
      case "Link":
        return link;
      default:
        return "";
    }
  }}

  ${(props) => {
    switch (props.$size) {
      case "Small":
        return btnSmallSize;
      case "Large":
        return btnLargeSize;
      case "Default":
        return btnDefaultSize;
      default:
        return btnDefaultSize;
    }
  }}

  ${(props) => (props.$shape === "Round" ? borderRounded : borderDefault)}

  ${(props) => props.$block && width_100}
`;

const BtnFlex = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
`;

const Button = ({ label, ...props }) => {
  const iconName = props.$setIcon;
  const Icon = icons[iconName];
  const DropDownIcon = icons["DownOutlined"];
  return (
    <StyledBtn {...props} as={props.$type === "Link" ? "a" : "button"}>
      <GlobalStyle />
      <BtnFlex>
        {props.$icon && Icon && <Icon />}
        {label}
        {props.$dropdown && <DropDownIcon />}
      </BtnFlex>
    </StyledBtn>
  );
};

Button.defaultProps = {
  label: "Button",
  $type: "Default",
  $shape: "Default",
  $size: "Default",
  $block: false,
  $danger: false,
  disabled: false,
  $icon: false,
  $setIcon: generateIconNames()[0],
};

Button.propTypes = {
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Set button type
   */
  $type: PropTypes.oneOf(["Primary", "Default", "Dashed", "Text", "Link"])
    .isRequired,
  /**
   * Can be set button shape
   */
  $shape: PropTypes.oneOf(["Default", "Round"]),
  /**
   * Set the size of button
   */
  $size: PropTypes.oneOf(["Default", "Small", "Large"]),
  /**
   * Option to fit button width to its parent width
   */
  $block: PropTypes.bool,
  /**
   * Set the danger status of button
   */
  $danger: PropTypes.bool,
  /**
   * Disabled state of button
   */
  disabled: PropTypes.bool,
  /**
   * enable icon component in Button component
   */
  $icon: PropTypes.bool,
  /**
   * Set the icon component of button
   */
  $setIcon: PropTypes.string,
};

export default Button;
