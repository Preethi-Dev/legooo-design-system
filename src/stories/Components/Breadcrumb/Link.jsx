import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import * as Icons from "@ant-design/icons";
import { GlobalStyle, findTokenValue } from "../../../utility";

export const Container = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) =>
    findTokenValue(theme["Breadcrumb-colorTextDescription"], theme)};
  font-size: 14px;
  text-decoration: none;
  padding: ${({ theme }) =>
    findTokenValue(theme["Breadcrumb-paddingXXS"], theme)}px;

  color: ${({ $lastItem }) =>
    $lastItem
      ? ({ theme }) => findTokenValue(theme["Breadcrumb-colorText"], theme)
      : ({ theme }) =>
          findTokenValue(theme["Breadcrumb-colorTextDescription"], theme)};

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) =>
      findTokenValue(theme["Breadcrumb-colorBgTextHover"], theme)};
  }
`;

export const Link = ({ ...props }) => {
  const Icon = Icons[props.$setIcon];
  const DropDownIcon = Icons["DownOutlined"];
  return (
    <Container {...props}>
      <GlobalStyle />
      {props.$icon && <Icon />}
      {props.$text && props.$setText}
      {props.$dropdown && <DropDownIcon />}
    </Container>
  );
};

Link.propTypes = {
  /**
   * Turn on icon
   */
  $icon: PropTypes.bool,
  /**
   * Set custom icon
   */
  $setIcon: PropTypes.string,
  /**
   * Turn on label
   */
  $text: PropTypes.bool,
  /**
   * Set Link text
   */
  $setText: PropTypes.string,
  /**
   * Turn on dropdown
   */
  $dropdown: PropTypes.bool,
};

Link.defaultProps = {
  $icon: true,
  $setIcon: "UserOutlined",
  $setText: "Users",
  $text: true,
  href: "https://react.dev/",
};
