import React from "react";
import styled, { ThemeProvider, css } from "styled-components";
import { GlobalStyle, findTokenValue } from "../../../utility";
import { generateBadgeBgColor } from "./Badge.helpers";
import { Dot } from "./Dot";
import * as myThemes from "../../../tokens";

const PositionBadge = css`
  position: absolute;
  top: ${({ offset }) => (offset ? `${offset[0]}px` : "2px")};
  right: ${({ offset }) => (offset ? `${offset[1]}px` : "2px")};
  transform: translate(50%, -50%);
  transform-origin: 100% 0%;
`;

const BadgeContainer = styled.div`
  display: inline-flex;
  padding: ${({ size }) => (size === "small" ? "0 .375rem" : "2px .5rem")};
  background-color: ${({ theme, $status, color }) =>
    color || findTokenValue(theme[generateBadgeBgColor($status)], theme)};
  color: ${({ theme }) =>
    findTokenValue(theme["Badge-colorBgContainer"], theme)};
  border-radius: 6.25rem;

  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;

  ${PositionBadge}
`;

const Container = styled.div`
  display: inline-flex;
  position: relative;
`;

const Badge = (props) => {
  const {
    $count,
    $overflowCount,
    $dot,
    size,
    $status,
    color,
    offset,
    children,
    $theme,
  } = props;
  const count = $overflowCount ? `${$overflowCount}+` : $count;

  return (
    <ThemeProvider theme={myThemes[$theme]}>
      <Container>
        {$dot ? (
          <Dot $status={$status} color={color} offset={offset} />
        ) : (
          <div title={count}>
            <BadgeContainer {...props}>
              <GlobalStyle />
              {count}
            </BadgeContainer>
          </div>
        )}
        {children}
      </Container>
    </ThemeProvider>
  );
};

Badge.defaultProps = {
  size: "default",
  $theme: "Light",
};

export default Badge;
