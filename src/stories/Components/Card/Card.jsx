import React from "react";
import styled from "styled-components";
import { CardHead } from "./CardHead";
import { CardActions } from "./CardActions";
import { GlobalStyle, findTokenValue } from "../../../utility";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.125rem;
  width: 300px;
  border: 1px solid
    ${({ $bordered }) =>
      $bordered
        ? ({ theme }) =>
            findTokenValue(theme["Card-colorBorderSecondary"], theme)
        : ({ theme }) => findTokenValue(theme["Card-colorFillAlter"], theme)};
  background: ${({ theme }) =>
    findTokenValue(theme["Card-colorBgContainer"], theme)};
`;

const Content = styled.div`
  padding: ${({ $size }) => ($size === "small" ? "1rem" : "1.5rem")};
  border-bottom: ${({ theme, $isActions }) =>
    $isActions
      ? `1px solid ${findTokenValue(theme["Card-colorBorderSecondary"], theme)}`
      : "none"};
  border-top: ${({ theme, $isHead }) =>
    $isHead
      ? `1px solid ${findTokenValue(theme["Card-colorBorderSecondary"], theme)}`
      : "none"};
`;

const Card = (props) => {
  const {
    $title,
    $extra,
    $actions,
    $bordered,
    $cover,
    $setActions,
    $setHead,
    $size,
    children,
  } = props;
  const isActions = $setActions || $actions ? true : false;
  const isHead = $setHead || $title || $extra ? true : false;
  return (
    <CardContainer $bordered={$bordered}>
      <GlobalStyle />
      {isHead && <CardHead $title={$title} $extra={$extra} $size={$size} />}
      {$cover && $cover}
      <Content $isHead={isHead} $isActions={isActions} $size={$size}>
        {children}
      </Content>
      {isActions && <CardActions $actions={$actions} />}
    </CardContainer>
  );
};

Card.defaultProps = {
  $size: "default",
  $bordered: true,
};

export default Card;
