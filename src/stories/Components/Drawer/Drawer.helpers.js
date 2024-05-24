import { keyframes } from "styled-components";

const slideInRight = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const slideOutRight = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
`;

const slideInLeft = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const slideOutLeft = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const slideInTop = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const slideOutTop = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-100%);
  }
`;

const slideInBottom = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const slideOutBottom = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(100%);
  }
`;

export const generateAnimationByPlacement = (open, placement) => {
  switch (placement) {
    case "right":
      return open ? slideInRight : slideOutRight;
    case "left":
      return open ? slideInLeft : slideOutLeft;
    case "top":
      return open ? slideInTop : slideOutTop;
    case "bottom":
      return open ? slideInBottom : slideOutBottom;
    default:
      return open ? slideInRight : slideOutRight;
  }
};
