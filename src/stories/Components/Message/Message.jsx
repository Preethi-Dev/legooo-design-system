import React, { useEffect, useState } from "react";
import styled, { ThemeProvider, css, keyframes } from "styled-components";
import { GlobalStyle, findTokenValue } from "../../../utility";
import PropTypes from "prop-types";
import {
  generateColorTokenByType,
  generateIconByType,
} from "./Message.helpers";
import * as myThemes from "../../../tokens";

const slideInTop = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const slideOutTop = keyframes`
  0% {
    transform: translateY(0%);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

const Container = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const MessageContainer = styled.div`
  display: inline-flex;
  padding: 0.625rem 1rem;
  align-items: center;
  gap: 0.5rem;

  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
  color: ${({ theme }) => findTokenValue(theme["Message-colorText"], theme)};
  background-color: ${({ theme }) =>
    findTokenValue(theme["Message-colorBgElevated"], theme)};
  border-radius: 0.125rem;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
  margin-top: 2rem;
  animation: ${({ $showMessage }) => css`
    ${$showMessage ? slideInTop : slideOutTop} 600ms forwards
  `};

  & svg {
    color: ${({ theme, $type }) =>
      findTokenValue(theme[generateColorTokenByType($type)], theme)};
  }
`;

const Message = ({ content, icon, type = "info", duration = 3, $theme }) => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={myThemes[$theme]}>
      <Container>
        <MessageContainer $type={type} $showMessage={showMessage}>
          <GlobalStyle />
          {icon ? icon : generateIconByType(type)}
          {content && content}
        </MessageContainer>
      </Container>
    </ThemeProvider>
  );
};

Message.defaultProps = {
  content: "This is a Message",
  type: "info",
  duration: 3,
  $theme: "Light",
};

Message.propTypes = {
  /**
   * The content of the message
   */
  content: PropTypes.string,
  /**
   * The type of messages
   */
  type: PropTypes.oneOf(["info", "success", "error", "warning", "loading"]),
  /**
   * Customized Icon
   */
  icon: PropTypes.node,
  /**
   * Time(seconds) before auto-dismiss
   */
  duration: PropTypes.number,
  /**
   * Toggle between Light and Dark themes for customizability. defaulting to `Light`.
   */
  $theme: PropTypes.oneOf(["Light", "Dark"]),
};

export default Message;
