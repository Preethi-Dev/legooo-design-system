import React, { useContext } from "react";
import { GlobalStyle, findTokenValue } from "../../../utility";
import { RightOutlined } from "@ant-design/icons";
import * as icons from "@ant-design/icons";
import styled, { css } from "styled-components";
import {
  CurrentMenuItemIndexContext,
  MenuItemContext,
} from "./MenuItemContext";

const MenuItemContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

const menuItemDisabled = css`
  color: ${({ theme }) => findTokenValue(theme["colorTextDisabled"], theme)};
  background-color: ${({ theme }) =>
    findTokenValue(theme["Button-colorBgContainerDisabled"], theme)};
  cursor: not-allowed;
`;

const DropdownMenuItemContainer = styled(MenuItemContainer)`
  align-items: end;
  justify-content: space-between;
  padding: 0.3125rem 0.75rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  min-width: 8.125rem;
  cursor: pointer;
  color: ${({ theme }) => findTokenValue(theme["Dropdown-colorText"], theme)};
  background-color: ${({ theme, $selected, $hovered }) =>
    ($selected &&
      findTokenValue(theme["Dropdown-controlItemBgActive"], theme)) ||
    ($hovered && findTokenValue(theme["Dropdown-controlItemBgHover"], theme))};
  font-weight: ${({ $selected }) => $selected && 600};

  &:hover,
  &:focus {
    background-color: ${({ theme }) =>
      findTokenValue(theme["Dropdown-controlItemBgHover"], theme)};
  }

  ${(props) => props.disabled && menuItemDisabled}
`;

const IconContainer = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) =>
    findTokenValue(theme["Dropdown-colorTextDescription"], theme)};
`;

export const DropdownMenuItem = ({ index, label, disabled, ...props }) => {
  const iconName = props.$setIcon;
  const Icon = icons[iconName];

  const selectedItem = useContext(MenuItemContext);
  const selectedItemIndex = useContext(CurrentMenuItemIndexContext);

  const $selected = selectedItem === label;
  const $hovered = selectedItemIndex === index;

  return (
    <DropdownMenuItemContainer
      $selected={$selected}
      $hovered={$hovered}
      disabled={disabled}
      {...props}
    >
      <GlobalStyle />
      <MenuItemContainer>
        {props.$icon && Icon && <Icon />}
        <p>{label}</p>
      </MenuItemContainer>
      <IconContainer>{props.$arrow && <RightOutlined />}</IconContainer>
    </DropdownMenuItemContainer>
  );
};
