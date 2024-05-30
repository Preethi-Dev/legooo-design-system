import React, { useContext, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "../Button";
import { DropdownMenu } from "./DropdownMenu";
import {
  CurrentMenuItemIndexContext,
  MenuItemContext,
} from "./MenuItemContext";
import * as myThemes from "../../../tokens";

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

const Dropdown = ({ $items, $placement, $theme, ...props }) => {
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
    <ThemeProvider theme={myThemes[$theme]}>
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
          <Button
            $type={props.$type}
            label={currentItem || props.label}
            $dropdown={props.$dropdown}
            $theme={$theme}
            style={{ width: "100%" }}
          />
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
    </ThemeProvider>
  );
};

Dropdown.defaultProps = {
  $placement: "bottomLeft",
  $theme: "Light",
};

export default Dropdown;
