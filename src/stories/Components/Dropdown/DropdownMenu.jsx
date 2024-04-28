import React from "react";
import styled from "styled-components";
import { DropdownMenuItem } from "./DropdownMenuItem";
import { MenuItemContext } from "./MenuItemContext";
import { findTokenValue } from "../../../utility";
import { nanoid } from "nanoid";

const DropdownMenuContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  border-radius: 0.5rem;
  padding: 0.25rem;
  background-color: ${({ theme }) =>
    findTokenValue(theme["Dropdown-colorBgElevated"], theme)};
  box-shadow:
    0px 3px 6px -4px rgba(0, 0, 0, 0.12),
    0px 6px 16px 0px rgba(0, 0, 0, 0.08),
    0px 9px 28px 8px rgba(0, 0, 0, 0.05);
  max-height: 200px;
  overflow: ${({ $items }) => $items.length > 8 && "scroll"};
`;

const Group = styled.div`
  display: inline-flex;
  flex-direction: ${({ $placement }) =>
    $placement.includes("top") ? "column-reverse" : "column"};
`;

const Icon = styled.div`
  width: 0;
  height: 0;
  margin: 0 1rem;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 8px solid
    ${({ theme }) => findTokenValue(theme["Dropdown-colorBgElevated"], theme)};
  position: relative;
  z-index: 9999;
  transform: ${({ $placement }) =>
    $placement.includes("top") && "rotate(180deg)"};
  align-self: ${(props) => {
    switch (props.$placement) {
      case "topLeft":
      case "bottomLeft":
        return "start";
      case "top":
      case "bottom":
        return "center";
      case "topRight":
      case "bottomRight":
        return "end";
      default:
        return "start";
    }
  }};
`;

export const DropdownMenu = ({ ...props }) => {
  const handleClickMenuItems = (e) => {
    props.$handleCurrentItem(e.target.innerText);
    props.$handleCurrentIndex(props.$items.indexOf(e.target.innerText));
  };
  return (
    <MenuItemContext.Provider value={props.$currentItem}>
      <Group {...props} onClick={handleClickMenuItems}>
        <Icon {...props}></Icon>
        <DropdownMenuContainer {...props}>
          {props.$items.map((label, index, $items) => (
            <DropdownMenuItem
              label={label}
              key={nanoid()}
              index={index}
              $items={$items}
            />
          ))}
        </DropdownMenuContainer>
      </Group>
    </MenuItemContext.Provider>
  );
};
