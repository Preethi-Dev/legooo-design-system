import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as Icons from "@ant-design/icons";
import { StepsItemIcon } from "./StepsItemIcon";
import { StepsTail } from "./StepsTail";
import { GlobalStyle, findTokenValue } from "../../../utility";
import {
  generateDescriptionColor,
  generateIconColor,
  generateTitleColor,
} from "./Steps.helpers";
import { StepDotStyle } from "./StepDotStyle";

const StepsItemIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`;

const StepsItemContainer = styled.div`
  display: inline-flex;
  align-items: start;
  width: 100%;
  gap: ${({ size }) => (size === "small" ? ".75rem" : "1rem")};
`;

const IconContainer = styled.div`
  font-size: ${({ size }) => (size === "small" ? "1.25rem" : "1.5rem")};
  color: ${({ theme, $status }) =>
    findTokenValue(theme[generateIconColor($status)], theme)};
`;

const StepTitleContainer = styled.div`
  display: flex;

  gap: ${({ size }) => (size === "small" ? ".75rem" : "1rem")};
  align-items: center;
`;

export const Title = styled.p`
  font-size: ${({ size }) => (size === "small" ? ".875rem" : "1rem")};
  font-style: normal;
  font-weight: 400;
  color: ${({ theme, $status }) =>
    findTokenValue(theme[generateTitleColor($status)], theme)};
`;

export const Description = styled.p`
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  color: ${({ theme, $status }) =>
    findTokenValue(theme[generateDescriptionColor($status)], theme)};
`;

const StepItemDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 0.25rem;
`;

export const StepsItem = (props) => {
  const {
    direction = "vertical",
    size,
    $status,
    description,
    title,
    setDescription,
    setTitle,
    tail,
    icon,
    $progressDot,
    step,
  } = props;

  const Icon = Icons[icon];
  return (
    <>
      <GlobalStyle />
      {$progressDot ? (
        <StepDotStyle {...props} />
      ) : (
        <StepsItemContainer size={size}>
          <StepsItemIconContainer>
            {icon ? (
              <IconContainer $status={$status} size={size}>
                {Icon && <Icon />}
              </IconContainer>
            ) : (
              <StepsItemIcon $status={$status} size={size} step={step} />
            )}
            {tail && direction === "vertical" && (
              <StepsTail direction={direction} $status={$status} />
            )}
          </StepsItemIconContainer>

          <StepItemDescContainer>
            {title && (
              <StepTitleContainer size={size}>
                <Title $status={$status} size={size}>
                  {setTitle}
                </Title>
                {tail && direction === "horizontal" && (
                  <StepsTail direction={direction} $status={$status} />
                )}
              </StepTitleContainer>
            )}
            {description && (
              <Description $status={$status} size={size}>
                {setDescription}
              </Description>
            )}
          </StepItemDescContainer>
        </StepsItemContainer>
      )}
    </>
  );
};

StepsItem.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  direction: PropTypes.oneOf(["vertical", "horizontal"]),
};
