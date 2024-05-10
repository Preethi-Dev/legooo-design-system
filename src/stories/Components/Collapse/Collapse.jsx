import React, { useState } from "react";
import styled from "styled-components";
import { CollapseItem } from "./CollapseItem";
import { nanoid } from "nanoid";
import { findTokenValue } from "../../../utility";

const CollapseContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: ${({ theme, $bordered }) =>
    $bordered
      ? `1px solid ${findTokenValue(theme["Collapse-colorBorder"], theme)}`
      : "none"};
  border-radius: 0.125rem;
`;

const HorizontalLine = styled.div`
  height: 1px;
  background-color: ${({ theme }) =>
    findTokenValue(theme["Collapse-colorBorder"], theme)};
`;

const Collapse = (props) => {
  const { items, defaultActiveKey, $bordered } = props;

  const [activeItem, setActiveItem] = useState(defaultActiveKey[0]);

  return (
    <CollapseContainer $bordered={$bordered}>
      {items.map((item, index) => (
        <div key={nanoid()}>
          <CollapseItem
            text={item.label}
            content={item.children}
            $key={item.key}
            defaultActive={defaultActiveKey.includes(item.key)}
            active={activeItem === item.key}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            {...props}
          />
          {index !== items.length - 1 && <HorizontalLine />}
        </div>
      ))}
    </CollapseContainer>
  );
};

Collapse.defaultProps = {
  defaultActiveKey: [],
  showArrow: true,
  $bordered: true,
};

export default Collapse;
