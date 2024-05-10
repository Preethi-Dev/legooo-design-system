import React, { useState } from "react";
import styled from "styled-components";
import * as Icons from "@ant-design/icons";
import { GlobalStyle, findTokenValue } from "../../../utility";

const CollapseItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) =>
    findTokenValue(theme["Collapse-colorTextHeading"], theme)};
  background-color: ${({ theme }) =>
    findTokenValue(theme["Collapse-colorBgContainer"], theme)};
`;

const CollapseHeader = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  padding: 0.75rem 1rem;
  background-color: ${({ theme }) =>
    findTokenValue(theme["Collapse-colorFillAlter"], theme)};
  cursor: pointer;
`;

const CollapseContent = styled.div`
  padding: 1rem;
  font-size: 0.875rem;
  background-color: ${({ $bordered, theme }) =>
    findTokenValue(
      theme[
        !$bordered ? "Collapse-colorFillAlter" : "Collapse-colorBgContainer"
      ],
      theme
    )};
`;

const IconWrapper = styled.div`
  font-size: 0.75rem;
  transition: transform 0.1s ease-in;
  transform: ${({ $active }) => $active && `rotate(90deg)`};
`;

const TextWrapper = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
`;

const HorizontalLine = styled.div`
  height: 1px;
  background-color: ${({ theme }) =>
    findTokenValue(theme["Collapse-colorBorder"], theme)};
`;

export const CollapseItem = (props) => {
  const {
    icon,
    text,
    content,
    $key,
    showArrow,
    $bordered,
    accordion,
    defaultActive,
    active: isActive,
    setActiveItem,
    activeItem,
  } = props;
  const Icon = Icons[icon];

  const [active, setActive] = useState(defaultActive || false);
  const handleCollapseClick = () => {
    accordion && setActiveItem($key !== activeItem ? $key : null);
    !accordion && setActive(!active);
  };
  return (
    <CollapseItemContainer>
      <CollapseHeader onClick={handleCollapseClick}>
        <GlobalStyle />
        {showArrow && (
          <IconWrapper $active={accordion ? isActive : active}>
            {Icon && <Icon />}
          </IconWrapper>
        )}
        <TextWrapper>{text && text}</TextWrapper>
      </CollapseHeader>
      {accordion ? (
        <>
          {isActive && $bordered && <HorizontalLine></HorizontalLine>}
          {isActive && (
            <CollapseContent $bordered={$bordered}>
              {content && content}
            </CollapseContent>
          )}
        </>
      ) : (
        <>
          {active && $bordered && <HorizontalLine></HorizontalLine>}
          {active && (
            <CollapseContent $bordered={$bordered}>
              {content && content}
            </CollapseContent>
          )}
        </>
      )}
    </CollapseItemContainer>
  );
};

CollapseItem.defaultProps = {
  icon: "RightOutlined",
  defaultActiveKey: [],
  showArrow: true,
  $bordered: true,
};
