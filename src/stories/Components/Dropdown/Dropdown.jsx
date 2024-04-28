import React, { useContext, useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import { DropdownMenu } from "./DropdownMenu";
import {
  CurrentMenuItemIndexContext,
  MenuItemContext,
} from "./MenuItemContext";

const DropdownContainer = styled.div`
  display: inline-flex;
  flex-direction: ${({ $placement }) =>
    $placement.includes("bottom") ? "column" : "column-reverse"};
  align-items: ${(props) => {
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

const Dropdown = ({ $items, $placement, ...props }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [currentItem, setCurrentItem] = useState(props.label);
  const [currentIndex, setCurrentIndex] = useState(null);
  const currentSelectedItem = useContext(MenuItemContext);
  const handleCurrentItem = (data) => setCurrentItem(data);
  const handleCurrentIndex = (data) => setCurrentIndex(data);
  const handleKeyDown = (e) => {
    if (e.code !== "Enter" && e.code === "ArrowDown") {
      setCurrentIndex(
        currentIndex === null
          ? 0
          : currentIndex !== $items.length - 1
            ? currentIndex + 1
            : 0
      );
    } else if (e.code !== "Enter" && e.code === "ArrowUp") {
      setCurrentIndex(
        currentIndex === null
          ? 0
          : currentIndex === 0
            ? $items.length - 1
            : currentIndex - 1
      );
    }
  };
  const revealMenu = () => setShowMenu(true);
  const hideMenu = () => setShowMenu(false);

  document.onclick = (e) =>
    !e.target.closest("#dropdownContainer") && hideMenu();

  return (
    <DropdownContainer
      $placement={$placement}
      onClick={revealMenu}
      onFocus={revealMenu}
      onKeyDown={handleKeyDown}
      onKeyUp={(e) => {
        if (e.code === "Enter") {
          Number.isInteger(currentIndex) &&
            setCurrentItem($items[currentIndex]);

          setShowMenu(false);
        } else if (e.code === "Escape") {
          hideMenu();
          setCurrentIndex($items.indexOf(currentSelectedItem), null);
        }
      }}
      id="dropdownContainer"
    >
      <div style={{ minWidth: "8.125rem" }}>
        <Button {...props} label={currentItem} style={{ width: "100%" }} />
      </div>
      <CurrentMenuItemIndexContext.Provider value={currentIndex}>
        <DropdownMenu
          $items={$items}
          $placement={$placement}
          style={{ display: showMenu ? "inline-flex" : "none" }}
          $handleCurrentItem={handleCurrentItem}
          $handleCurrentIndex={handleCurrentIndex}
          $currentItem={currentItem}
        />
      </CurrentMenuItemIndexContext.Provider>
    </DropdownContainer>
  );
};

Dropdown.defaultProps = {
  $placement: "bottomLeft",
};

export default Dropdown;
