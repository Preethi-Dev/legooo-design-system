import React, { useState } from "react";
import styled, { ThemeProvider, css } from "styled-components";
import fallback from "./fallback.svg";
import { GlobalStyle, findTokenValue } from "../../../utility";
import {
  CloseOutlined,
  DownloadOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from "@ant-design/icons";
import { saveAs } from "file-saver";
import * as myThemes from "../../../tokens";

const previewMode = css`
  &:after {
    content: "Preview";
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: ${({ theme }) =>
      findTokenValue(theme["Image-colorTextLightSolid"], theme)};
    background: ${({ theme }) =>
      findTokenValue(theme["Image-colorBgMask"], theme)};
    opacity: 0;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
  }
  &:hover:after {
    cursor: pointer;
    opacity: 1;
  }
`;

const ImageContainer = styled.div`
  display: inline-flex;
  position: relative;
  overflow: hidden;

  ${({ $preview }) => $preview && previewMode};

  & > img {
    filter: ${({ $blur }) => $blur && "blur(5px)"};
  }
`;

const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) =>
    findTokenValue(theme["Image-colorBgMask"], theme)};
  overflow: hidden;
  z-index: 1;
`;

const ImageWrapper = styled.div`
  margin: auto;
  transform: ${({ $horizontalFlip, $verticalFlip, $clockRotate, $zoomIn }) =>
    `scale3d(${$horizontalFlip ? -$zoomIn : $zoomIn}, ${$verticalFlip ? -$zoomIn : $zoomIn}, 1) rotate(${$clockRotate}deg)`};
  transition: all 0.2s ease-in;
  cursor: grab;
`;

const CloseIconWrapper = styled.div`
  display: inline-flex;
  align-self: flex-end;
  background-color: ${({ theme }) =>
    findTokenValue(theme["Image-colorBgMask"], theme)};
  color: ${({ theme }) =>
    findTokenValue(theme["Image-colorTextLightSolid"], theme)};
  border-radius: 100%;
  padding: 1rem;
  margin: 2rem 2rem 0 0;
  font-size: 1rem;
  position: absolute;
  cursor: pointer;
  z-index: 2;
`;

const PreviewTool = styled.div`
  display: inline-flex;
  align-self: center;
  gap: 2rem;
  color: ${({ theme }) =>
    findTokenValue(theme["Image-colorTextLightSolid"], theme)};
  background-color: ${({ theme }) =>
    findTokenValue(theme["Image-colorBgMask"], theme)};
  border-radius: 6.325rem;
  font-size: 1rem;
  padding: 1rem 2rem;
  margin: 1rem;
  position: absolute;
  bottom: 10%;

  & > * {
    cursor: pointer;
  }
`;

const Image = ({
  width,
  height,
  src,
  alt,
  $preview,
  blur,
  download: $download,
  preview,
  $theme,
}) => {
  const [isPreviewOn, setIsPreviewOn] = useState(false);
  const [isVerticalFlip, setIsVerticalFlip] = useState(false);
  const [isHorizontalFlip, setIsHorizontalFlip] = useState(false);
  const [clockRotate, setClockRotate] = useState(0);
  const [zoomIn, setZoomIn] = useState(1);

  const handleImgClick = () => {
    setIsPreviewOn(true);
  };
  const handleImgDownload = () => {
    saveAs(src, `${alt}.jpg`);
  };
  const hanldeClosePreview = (e) => {
    !(e.target.tagName === "IMG") &&
      !e.target.closest("#preview-tool") &&
      setIsPreviewOn(false);
  };
  const handleVerticalFlip = () => {
    setIsVerticalFlip(!isVerticalFlip);
  };
  const handleHorizontalFlip = () => {
    setIsHorizontalFlip(!isHorizontalFlip);
  };
  const handleClockRotate = () => {
    setClockRotate(clockRotate + 90);
  };
  const handleAntiClockRotate = () => {
    setClockRotate(clockRotate - 90);
  };
  const handleZoomIn = () => {
    zoomIn < 50 && setZoomIn(zoomIn * 1.5);
  };
  const handleZoomOut = () => {
    zoomIn > 1 && setZoomIn(zoomIn / 1.5);
  };

  return (
    <ThemeProvider theme={myThemes[$theme]}>
      <ImageContainer $preview={$preview} onClick={handleImgClick} $blur={blur}>
        <GlobalStyle />

        <img
          src={src}
          width={width}
          height={height}
          alt={alt}
          style={{ objectFit: "cover" }}
        />
      </ImageContainer>
      {$preview && isPreviewOn && (
        <Overlay onClick={hanldeClosePreview}>
          <CloseIconWrapper>
            <CloseOutlined />
          </CloseIconWrapper>
          <ImageWrapper
            $verticalFlip={isVerticalFlip}
            $horizontalFlip={isHorizontalFlip}
            $clockRotate={clockRotate}
            $zoomIn={zoomIn}
          >
            <img
              src={preview ? preview.src : src}
              width={"600px"}
              height={"500px"}
              style={{ objectFit: "cover" }}
              alt={alt}
            />
          </ImageWrapper>
          <PreviewTool id="preview-tool">
            {$download && <DownloadOutlined onClick={handleImgDownload} />}
            <SwapOutlined
              style={{ transform: "rotate(90deg)" }}
              onClick={handleVerticalFlip}
            />
            <SwapOutlined onClick={handleHorizontalFlip} />
            <RotateLeftOutlined onClick={handleAntiClockRotate} />
            <RotateRightOutlined onClick={handleClockRotate} />
            <ZoomOutOutlined
              onClick={handleZoomOut}
              style={{
                opacity: !(zoomIn > 1) && 0.5,
                cursor: !(zoomIn > 1) && "not-allowed",
              }}
            />
            <ZoomInOutlined
              onClick={handleZoomIn}
              style={{
                opacity: !(zoomIn < 50) && 0.5,
                cursor: !(zoomIn < 50) && "not-allowed",
              }}
            />
          </PreviewTool>
        </Overlay>
      )}
    </ThemeProvider>
  );
};

Image.defaultProps = {
  width: "200px",
  height: "auto",
  src: fallback,
  blur: false,
  download: true,
  $theme: "Light",
};

export default Image;
