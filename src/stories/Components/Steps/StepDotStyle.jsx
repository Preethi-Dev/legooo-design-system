import React from "react";
import styled from "styled-components";
import { StepsTail } from "./StepsTail";
import { findTokenValue } from "../../../utility";
import { findStatusByCurrent, generateIconColor } from "./Steps.helpers";
import { Title, Description } from "./StepsItem";

const StepDotContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "vertical" ? "row" : "column"};
  gap: 1rem;
  width: 100%;
`;

const DotContainer = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  flex-direction: ${({ direction }) =>
    direction === "vertical" ? "column" : "row"};
  gap: 0.25rem;

  margin-left: ${({ direction, $index }) =>
    direction === "horizontal" ? $index === 0 && "50%" : "0%"};
  margin-right: ${({ direction, $index, $items }) =>
    direction === "horizontal" ? $index === $items.length - 1 && "50%" : "0%"};
`;

const Dot = styled.div`
  width: ${({ $status }) =>
    ["current", "error"].includes($status) ? ".625rem" : ".5rem"};
  height: ${({ $status }) =>
    ["current", "error"].includes($status) ? ".625rem" : ".5rem"};
  border-radius: 0.5rem;
  background-color: ${({ theme, $status }) =>
    findTokenValue(theme[generateIconColor($status)], theme)};
  flex-shrink: 0;
`;

const DotDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: ${({ direction }) =>
    direction === "vertical" ? "start" : "center"};
  text-align: center;
`;

export const StepDotStyle = ({
  direction = "vertical",
  size,
  $status,
  description,
  title,
  setDescription,
  setTitle,
  tail,
  $progressDot,
  $index = 0,
  $items = [],
  current,
}) => {
  return (
    <StepDotContainer
      direction={direction}
      style={{
        marginTop:
          $progressDot &&
          direction === "horizontal" &&
          ["current", "error"].includes($status)
            ? "-1px"
            : 0,
      }}
    >
      <DotContainer direction={direction} $index={$index} $items={$items}>
        {tail && direction === "horizontal" && $index !== 0 && (
          <StepsTail
            direction={direction}
            $status={$status}
            $progressDot={$progressDot}
            style={{
              backgroundColor:
                !current && $items[$index - 1].status === "finished"
                  ? "rgba(22, 119, 255, 1.00)"
                  : findStatusByCurrent(current - 1, $index - 1) === "finished"
                    ? "rgba(22, 119, 255, 1.00)"
                    : "rgba(0, 0, 0, 0.06)",
            }}
          />
        )}
        <Dot $status={$status}></Dot>
        {tail && $index !== $items.length - 1 && (
          <StepsTail
            direction={direction}
            $status={$status}
            $progressDot={$progressDot}
          />
        )}
      </DotContainer>
      <DotDescContainer direction={direction}>
        {title && (
          <Title $status={$status} size={size}>
            {setTitle}
          </Title>
        )}
        {description && (
          <Description $status={$status} size={size}>
            {setDescription}
          </Description>
        )}
      </DotDescContainer>
    </StepDotContainer>
  );
};
