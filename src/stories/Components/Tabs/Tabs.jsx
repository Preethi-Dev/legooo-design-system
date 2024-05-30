import React, { useEffect, useRef, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import { Tab } from "./Tab";
import { findTokenValue } from "../../../utility";
import { nanoid } from "nanoid";
import {
  findTabContentByKey,
  findTabKeyByLabel,
  isExceededContent,
} from "./Tabs.helpers";
import * as myThemes from "../../../tokens";

const Container = styled.div`
  display: flex;
  flex-direction: ${({ $tabPosition }) =>
    $tabPosition === "vertical" ? "row" : "column"};
`;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: ${({ $tabPosition }) =>
    $tabPosition === "vertical" ? "column" : "row"};
  align-items: start;
  gap: ${({ $tabPosition }) =>
    $tabPosition === "vertical" ? "1.25rem" : "2rem"};
  max-height: ${({ $items }) => isExceededContent($items) && "47vh"};
`;

const TabsWrapper = styled.div`
  display: flex;
  flex-direction: ${({ $tabPosition }) =>
    $tabPosition === "vertical" ? "row" : "column"};
  align-items: stretch;
  gap: ${({ $tabPosition }) => $tabPosition === "vertical" && "1rem"};
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const HorizontalLine = styled.div`
  width: ${({ $tabPosition }) =>
    $tabPosition === "vertical" ? "1px" : "100%"};
  height: ${({ $tabPosition, $parentRect }) =>
    $tabPosition === "vertical" ? `${$parentRect.height}px` : "1px"};
  background-color: ${({ theme }) =>
    findTokenValue(theme["Tabs-controlItemBgHover"], theme)};
`;

const ActiveLine = styled.div`
  width: ${({ $rect, $tabPosition }) =>
    $tabPosition === "vertical" ? `${0.125}rem` : `${$rect.width}px`};
  height: ${({ $rect, $tabPosition }) =>
    $tabPosition === "vertical" ? `${$rect.height}px` : `${0.125}rem`};
  background-color: ${({ theme }) =>
    findTokenValue(theme["Tabs-colorPrimary"], theme)};
  margin-left: ${({ $rect, $parentRect, $tabPosition }) =>
    $tabPosition === "horizontal" && `${$rect.x - $parentRect.x}px`};
  position: relative;
  top: ${({ $rect, $parentRect, $tabPosition }) =>
    $tabPosition === "vertical" && `${$rect.y - $parentRect.y}px`};
  transition: all 0.2s ease-out;
`;

const TabContent = styled.div`
  padding: 1.5rem;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  color: ${({ theme }) => findTokenValue(theme["Tabs-colorText"], theme)};
`;

const Tabs = ({
  items,
  defaultActiveKey,
  tabPosition,
  tabBarExtraContent,
  centered,
  size,
  $theme,
}) => {
  const [rect, setRect] = useState(null);
  const [parentRect, setParentRect] = useState(null);
  const [activeKey, setActiveKey] = useState(defaultActiveKey || items[0].key);
  const activeTabRef = useRef(null);
  const tabsContainerRef = useRef(null);
  const tabsWrapperRef = useRef(null);

  useEffect(() => {
    setRect(activeTabRef.current.getBoundingClientRect());
    setParentRect(tabsContainerRef.current.getBoundingClientRect());
  }, [activeTabRef, activeKey]);

  useEffect(() => {
    if (rect && parentRect && tabPosition === "vertical")
      tabsWrapperRef.current.scrollBottom = `${rect.x - parentRect.x}px`;
  }, [tabsWrapperRef, rect]);

  const handleClick = (e) => {
    if (
      e.target.children.length === 0 ||
      (e.target.children.length === 1 && e.target.children[0].role === "img")
    ) {
      const activeItem = findTabKeyByLabel(items, e.target.innerText);
      setActiveKey(activeItem.key);
    }
  };

  return (
    <ThemeProvider theme={myThemes[$theme]}>
      <Container $tabPosition={tabPosition}>
        <TabsWrapper $tabPosition={tabPosition} ref={tabsWrapperRef}>
          <TabsContainer
            ref={tabsContainerRef}
            onClick={handleClick}
            $tabPosition={tabPosition}
            $items={items}
          >
            {tabBarExtraContent && tabBarExtraContent.left && (
              <div style={{ alignSelf: "center" }}>
                {tabBarExtraContent.left}
              </div>
            )}

            {items &&
              items.map((item, index) =>
                item.key === activeKey ? (
                  <div
                    key={nanoid()}
                    ref={activeTabRef}
                    style={{
                      minWidth: "max-content",
                      marginLeft:
                        centered &&
                        tabPosition === "horizontal" &&
                        index === 0 &&
                        "auto",
                      marginRight:
                        centered &&
                        tabPosition === "horizontal" &&
                        items.length - 1 === index &&
                        "auto",
                      marginTop:
                        centered &&
                        tabPosition === "vertical" &&
                        index === 0 &&
                        "auto",
                      marginBottom:
                        centered &&
                        tabPosition === "vertical" &&
                        items.length - 1 === index &&
                        "auto",
                    }}
                  >
                    <Tab
                      label={item.label}
                      selected={item.key === activeKey}
                      icon={item.icon}
                      size={size}
                    />
                  </div>
                ) : (
                  <div
                    key={nanoid()}
                    style={{
                      minWidth: "max-content",
                      marginLeft:
                        centered &&
                        tabPosition === "horizontal" &&
                        index === 0 &&
                        "auto",
                      marginRight:
                        centered &&
                        tabPosition === "horizontal" &&
                        items.length - 1 === index &&
                        "auto",
                      marginTop:
                        centered &&
                        tabPosition === "vertical" &&
                        index === 0 &&
                        "auto",
                      marginBottom:
                        centered &&
                        tabPosition === "vertical" &&
                        items.length - 1 === index &&
                        "auto",
                    }}
                  >
                    <Tab
                      label={item.label}
                      selected={item.key === activeKey}
                      icon={item.icon}
                      size={size}
                    />
                  </div>
                )
              )}

            {tabBarExtraContent && tabBarExtraContent.right && (
              <div
                style={{ marginLeft: !centered && "auto", alignSelf: "center" }}
              >
                {tabBarExtraContent.right}
              </div>
            )}
          </TabsContainer>
          {parentRect && rect && (
            <ActiveLine
              $tabPosition={tabPosition}
              $rect={rect}
              $parentRect={parentRect}
            />
          )}
        </TabsWrapper>
        {parentRect && (
          <HorizontalLine
            $tabPosition={tabPosition}
            $parentRect={parentRect}
          ></HorizontalLine>
        )}
        <TabContent $tabPosition={tabPosition}>
          {findTabContentByKey(items, activeKey).children}
        </TabContent>
      </Container>
    </ThemeProvider>
  );
};

Tabs.defaultProps = {
  items: [],
  tabPosition: "horizontal",
  tabBarExtraContent: {},
  centered: false,
  size: "medium",
  $theme: "Light",
};

Tabs.propTypes = {
  /**
   * Configure tab content
   */
  items: PropTypes.array.isRequired,
  /**
   * Initial active TabPane's key, if activeKey is not set
   */
  defaultActiveKey: PropTypes.string.isRequired,
  /**
   * Position of tabs
   */
  tabPosition: PropTypes.oneOf(["vertical", "horizontal"]),
  /**
   * Extra content in tab bar `{left?: ReactNode, right?: ReactNode}`
   */
  tabBarExtraContent: PropTypes.object,
  /**
   * Centers tabs
   */
  centered: PropTypes.bool,
  /**
   * Preset tab bar size
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Toggle between Light and Dark themes for customizability. defaulting to `Light`.
   */
  $theme: PropTypes.oneOf(["Light", "Dark"]),
};

export default Tabs;
