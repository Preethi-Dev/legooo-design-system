import React from "react";
import styled, { css } from "styled-components";
import * as Icons from "@ant-design/icons";
import { AVATAR_IMG_URL } from "./Avatar.constants";
import { generateSize, generateTextSize } from "./Avatar.helpers";
import { GlobalStyle } from "../../../utility";

const AvatarIntext = css`
  background: none;
  background-color: lightgray;
  padding: 0.5rem;
`;

const AvatarContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ size }) => generateTextSize(size)};
  width: ${({ size }) => generateSize(size)};
  height: ${({ size }) => generateSize(size)};
  border-radius: ${({ shape }) => (shape === "circle" ? "50%" : "0%")};
  background: ${({ src }) =>
    `url(${src && src.includes("http") ? src : AVATAR_IMG_URL})`};
  background-color: lightgray; /* Background color */
  background-position: 50%; /* Background position */
  background-size: cover; /* Background size */
  background-repeat: no-repeat; /* Background repeat */
  background-color: #fff;

  ${({ children, $icon }) => ($icon || children) && AvatarIntext}
`;

const Avatar = (props) => {
  const { size, shape, badge, children, $icon, $text } = props;
  const Icon = Icons[$icon];
  const content = $text ? $text : children;

  return (
    <>
      <GlobalStyle />
      <AvatarContainer {...props}>
        {$icon ? <Icon /> : content && content.charAt(0).toUpperCase()}
      </AvatarContainer>
    </>
  );
};

Avatar.defaultProps = {
  shape: "circle",
  src: AVATAR_IMG_URL,
};

export default Avatar;
