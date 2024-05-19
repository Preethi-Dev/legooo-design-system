import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../../../utility";
import { TooltipArrow } from "./TooltipArrow";
import { generateArrowPlacement, generateBgColor } from "./Toolitip.helpers";

const TooltipContainer = styled.div`
  display: inline-flex;
  ${({ $placement, $rect }) => generateArrowPlacement($placement, $rect)}
`;

const TooltipContent = styled.p`
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
  text-transform: capitalize;

  padding: 0.375rem 0.5rem;
  border-radius: 0.125rem;
  color: rgba(255, 255, 255, 1);
  background: ${({ color }) => generateBgColor(color)};
`;

export const TooltipInner = ({ title, placement, color, $rect }) => {
  return (
    <TooltipContainer $placement={placement} $rect={$rect}>
      <GlobalStyle />
      <TooltipContent color={color}>{title}</TooltipContent>
      <TooltipArrow color={color} />
    </TooltipContainer>
  );
};

TooltipInner.defaultProps = {
  title: "prompt text",
  placement: "bottom",
  color: "black",
};
