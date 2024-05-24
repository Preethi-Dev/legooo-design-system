import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { GlobalStyle, findTokenValue } from "../../../utility";
import { CloseOutlined } from "@ant-design/icons";
import { generateAnimationByPlacement } from "./Drawer.helpers";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) =>
    findTokenValue(theme["Drawer-colorBgMask"], theme)};
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${({ open }) => (open ? 1 : -1)};
  opacity: ${({ open }) => (open ? "100%" : "0%")};
  transition: opacity 0.1s ease-in;
  overflow: hidden;
`;

const DrawerContainer = styled.div`
  margin-left: ${({ $placement }) => $placement === "right" && "auto"};
  margin-right: ${({ $placement }) => $placement === "left" && "auto"};
  min-width: ${({ $size }) => ($size === "large" ? "736px" : "378px")};
  align-self: ${({ $placement }) =>
    ($placement === "top" && "flex-start") ||
    ($placement === "bottom" && "flex-end")};
  height: ${({ $placement }) =>
    (["left", "right"].includes($placement) && "100%") ||
    (["top", "bottom"].includes($placement) && "40vh")};
  width: ${({ $placement }) =>
    ["top", "bottom"].includes($placement) && "100%"};
  background-color: ${({ theme }) =>
    findTokenValue(theme["Drawer-colorBgElevated"], theme)};
  color: ${({ theme }) => findTokenValue(theme["Drawer-colorText"], theme)};
  transition: margin 0.3s ease-in;
  animation: ${({ open, $placement }) => css`
    ${generateAnimationByPlacement(open, $placement)} 600ms forwards
  `};
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid
    ${({ theme }) => findTokenValue(theme["Drawer-colorSplit"], theme)};
`;

const DrawerClose = styled.div`
  display: inline-flex;
  color: ${({ theme }) => findTokenValue(theme["Drawer-colorIcon"], theme)};
  cursor: pointer;
  width: 1.25rem;
  height: 1.25rem;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) =>
      findTokenValue(theme["Drawer-colorIconHover"], theme)};
    background-color: ${({ theme }) =>
      findTokenValue(theme["Drawer-colorSplit"], theme)};
  }
`;

const DrawerTitle = styled.p`
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
`;

const DrawerBody = styled.div`
  padding: 1.5rem;
`;

const Extra = styled.div`
  margin-left: auto;
`;

const Drawer = ({
  title,
  children,
  size = "default",
  placement = "right",
  onClose,
  open,
  closable = true,
  extra,
}) => {
  const containerRef = useRef(null);
  const handleClick = (e) => {
    e.target === containerRef.current && onClose();
  };

  return (
    <Container onClick={handleClick} ref={containerRef} open={open}>
      <DrawerContainer $size={size} open={open} $placement={placement}>
        <GlobalStyle />
        <DrawerHeader>
          {closable && (
            <DrawerClose onClick={onClose}>
              <CloseOutlined />
            </DrawerClose>
          )}
          <DrawerTitle>{title && title}</DrawerTitle>
          <Extra>{extra && extra}</Extra>
        </DrawerHeader>
        <DrawerBody>{children}</DrawerBody>
      </DrawerContainer>
    </Container>
  );
};

Drawer.defaultProps = {
  size: "default",
  placement: "right",
  open: false,
  closable: true,
};

Drawer.propTypes = {
  /**
   * The title for Drawer
   */
  title: PropTypes.string,
  /**
   * preset size of drawer, default 378px and large 736px
   */
  size: PropTypes.oneOf(["default", "large"]),
  /**
   * The placement of the Drawer
   */
  placement: PropTypes.oneOf(["top", "left", "bottom", "right"]),
  /**
   * Specify a callback that will be called when a user clicks mask, close button or Cancel button
   */
  onClose: PropTypes.func,
  /**
   * Whether the Drawer dialog is visible or not
   */
  open: PropTypes.bool,
  /**
   * close button will be hidden when setting to null or false
   */
  closable: PropTypes.bool,
  /**
   * Extra actions area at corner
   */
  extra: PropTypes.node,
};

export default Drawer;
