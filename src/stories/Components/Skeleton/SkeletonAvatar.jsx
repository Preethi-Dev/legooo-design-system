import React from "react";
import styled, { css } from "styled-components";
import { findTokenValue } from "../../../utility";
import { loading } from "./Skeleton.helpers";
import PropTypes from "prop-types";

const AvatarContainer = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: ${({ $shape }) => ($shape === "circle" ? "50%" : "0%")};
  background-color: ${({ theme }) =>
    findTokenValue(theme["Skeleton-colorFillContent"], theme)};
  animation: ${({ $active }) =>
    $active &&
    css`
      ${loading} 1s linear infinite alternate
    `};
`;

export const SkeletonAvatar = ({ shape = "circle", active }) => {
  return <AvatarContainer $shape={shape} $active={active}></AvatarContainer>;
};

SkeletonAvatar.defaultProps = {
  shape: "circle",
  active: false,
};

SkeletonAvatar.propTypes = {
  /**
   * Set the size of avatar
   */
  shape: PropTypes.oneOf(["circle", "square"]),
  /**
   * Show animation effect
   */
  active: PropTypes.bool,
};
