import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { GlobalStyle, findTokenValue } from "../../../utility";
import { Slick } from "./Slick";
import {
  DownOutlined,
  LeftOutlined,
  RightOutlined,
  UpOutlined,
} from "@ant-design/icons";
import {
  generateNextArrowPosition,
  generatePrevArrowPosition,
  generateSlickPosition,
} from "./Carousel.helpers";

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: ${({ $dotPosition }) =>
    ["Left", "Right"].includes($dotPosition) ? "column" : "row"};
  flex-wrap: nowrap;
  overflow: hidden;
  position: relative;
  align-items: center;
  width: ${({ $dimension }) => $dimension[0]};
  height: ${({ $dimension }) => $dimension[1]};
`;

const CarouselItem = styled.div`
  width: 100%;
  min-width: 100%;
  height: ${({ $dimension }) => $dimension[1]};
  min-height: ${({ $dotPosition, $dimension }) =>
    ["Left", "Right"].includes($dotPosition) ? $dimension[1] : "auto"};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => findTokenValue(theme["blue-3"], theme)};
  color: ${({ theme }) => findTokenValue(theme["Carousel-colorText"], theme)};
  overflow: hidden;

  transition: transform
    ${({ $transitionSec }) =>
      `${$transitionSec}s cubic-bezier(0.39, 0.575, 0.565, 1)`};
`;

const SlickContainer = styled.div`
  display: flex;
  padding: 0.75rem;
  gap: 0.375rem;
  position: absolute;
  ${({ $dotPosition }) => generateSlickPosition($dotPosition)}
`;

const Btn = css`
  cursor: pointer;
  position: absolute;

  color: #fff;
  padding: 0.5rem;
`;

const PrevBtn = styled.div`
  ${Btn}
  ${({ $dotPosition }) => generatePrevArrowPosition($dotPosition)}
`;
const NextBtn = styled.div`
  ${Btn}
  ${({ $dotPosition }) => generateNextArrowPosition($dotPosition)}
`;

const Carousel = ({ arrows, autoPlay, $dotPosition, $dimension, children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitionSec, setTransitionSec] = useState(1);

  const height = $dimension[1];

  function prev() {
    currentIndex !== 0 && setCurrentIndex(currentIndex - 1);
  }

  function next() {
    currentIndex !== children.length - 1 && setCurrentIndex(currentIndex + 1);
  }

  const handleDot = (index) => {
    setCurrentIndex(index);
  };

  const carouselInfiniteScroll = () => {
    if (currentIndex === children.length - 1) {
      setTransitionSec(0);
      return setCurrentIndex(0);
    }
    setTransitionSec(1);
    return setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    const intervalId =
      autoPlay && setInterval(() => carouselInfiniteScroll(), 2000);
    return () => clearInterval(intervalId);
  });

  return (
    <CarouselContainer $dotPosition={$dotPosition} $dimension={$dimension}>
      <GlobalStyle />
      <>
        {children.map((child, index) => (
          <CarouselItem
            key={index}
            style={{
              transform: ["Left", "Right"].includes($dotPosition)
                ? `translateY(-${currentIndex * parseInt(height)}px)`
                : `translateX(-${currentIndex * 100}%)`,
            }}
            $transitionSec={transitionSec}
            $dotPosition={$dotPosition}
            $dimension={$dimension}
          >
            {child}
          </CarouselItem>
        ))}
        <SlickContainer $dotPosition={$dotPosition}>
          {children.map((child, index) => (
            <div onClick={() => handleDot(index)} key={index}>
              <Slick
                $active={currentIndex === index}
                $dotPosition={$dotPosition}
              />
            </div>
          ))}
        </SlickContainer>
        {arrows && currentIndex !== 0 && (
          <PrevBtn onClick={() => prev()} $dotPosition={$dotPosition}>
            {["Top", "Bottom"].includes($dotPosition) && <LeftOutlined />}
            {["Left", "Right"].includes($dotPosition) && <UpOutlined />}
          </PrevBtn>
        )}
        {arrows && currentIndex !== children.length - 1 && (
          <NextBtn onClick={() => next()} $dotPosition={$dotPosition}>
            {["Top", "Bottom"].includes($dotPosition) && <RightOutlined />}
            {["Left", "Right"].includes($dotPosition) && <DownOutlined />}
          </NextBtn>
        )}
      </>
    </CarouselContainer>
  );
};

Carousel.defaultProps = {
  arrows: false,
  $dotPosition: "Bottom",
  autoPlay: false,
  $dimension: ["800px", "400px"],
};
export default Carousel;
