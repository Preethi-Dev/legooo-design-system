import React from "react";
import { GlobalStyle } from "../../../utility";
import styled from "styled-components";
import { StepsItem } from "./StepsItem";
import { nanoid } from "nanoid";
import { findStatusByCurrent } from "./Steps.helpers";

const StepsContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "vertical" ? "column" : "row"};
  gap: ${({ direction, $progressDot }) =>
    direction === "vertical" ? ".5rem" : $progressDot ? "0rem" : "1rem"};
  align-items: ${({ direction, $progressDot }) =>
    $progressDot && direction === "horizontal" ? "start" : "center"};
`;

const Steps = ({
  items,
  $progressDot,
  direction,
  current,
  size = "medium",
}) => {
  const DotStyle = $progressDot || false;
  const dir = direction || "horizontal";
  return (
    <StepsContainer direction={dir} $progressDot={DotStyle}>
      <GlobalStyle />
      {items.map((item, index, items) => {
        const title = item.title ? true : false;
        const description = item.description ? true : false;
        const tail = item.tail || true;
        const step = index + 1;
        const icon = item.icon;
        return (
          <StepsItem
            title={title}
            setTitle={item.title}
            $status={findStatusByCurrent(current - 1, index) || item.status}
            tail={index === items.length - 1 && !DotStyle ? false : tail}
            description={description}
            setDescription={item.description}
            step={step}
            key={nanoid()}
            direction={dir}
            icon={icon}
            $progressDot={DotStyle}
            $index={index}
            $items={items}
            current={current}
            size={size}
          />
        );
      })}
    </StepsContainer>
  );
};

export default Steps;
