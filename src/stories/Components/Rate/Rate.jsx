import React, { useState } from "react";
import PropTypes, { node, number, string } from "prop-types";
import styled from "styled-components";
import { generateStarByCount } from "./Rate.helpers";
import { findTokenValue } from "../../../utility";
import { nanoid } from "nanoid";
import { RateStar } from "./RateStar";
import { HalfRateStar } from "./HalfRateStar";
import Tooltip from "../Tooltip";

export const RateContainer = styled.div`
  font-size: 1.25rem;
  color: ${({ theme }) =>
    findTokenValue(theme["Rate-colorFillContent"], theme)};
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

const RateStarContainer = styled.div`
  color: ${({ theme, $currentStar, $star }) =>
    $star <= $currentStar
      ? "rgba(250, 219, 20, 1)"
      : findTokenValue(theme["Rate-colorFillContent"], theme)};
  transition: font-size 0.2s ease-in-out;
  min-width: 1.4rem;
  min-height: 2rem;
  &:hover {
    font-size: 1.35rem;
  }
`;

const Rate = ({
  count = 5,
  value = 0,
  character,
  allowHalf,
  tooltips,
  disabled,
}) => {
  const [currentStar, setcurrentStar] = useState(value);
  const [tempCurrentStar, setTempCurrentStar] = useState(currentStar);
  const starCounts = generateStarByCount(count);

  const handleMouseEnter = (e, id) => {
    if (!disabled) {
      setTempCurrentStar(id);
    }
  };

  const handleMouseLeave = (e) => {
    if (!disabled) {
      setTempCurrentStar(currentStar);
    }
  };

  const handleClick = (e, id) => {
    if (!disabled) {
      id === currentStar ? setcurrentStar(null) : setcurrentStar(id);
    }
  };

  return allowHalf ? (
    <HalfRateStar
      count={count}
      character={character}
      disabled={disabled}
      value={value}
    />
  ) : (
    <RateContainer>
      {starCounts.map((star, index) =>
        tooltips && tooltips.length === starCounts.length ? (
          <Tooltip placement="top" title={tooltips[index]} key={nanoid()}>
            <RateStarContainer
              onMouseEnter={(e) => handleMouseEnter(e, star)}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => handleClick(e, star)}
              $currentStar={tempCurrentStar}
              $star={star}
            >
              <RateStar character={character} />
            </RateStarContainer>
          </Tooltip>
        ) : (
          <RateStarContainer
            onMouseEnter={(e) => handleMouseEnter(e, star)}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => handleClick(e, star)}
            key={nanoid()}
            $currentStar={tempCurrentStar}
            $star={star}
          >
            <RateStar character={character} />
          </RateStarContainer>
        )
      )}
    </RateContainer>
  );
};

Rate.defaultProps = {
  allowHalf: false,
  tooltips: [],
  disabled: false,
};

Rate.propTypes = {
  /**
   * Star count
   */
  count: PropTypes.number,
  /**
   * The current value
   */
  value: PropTypes.number,
  /**
   * The custom character of rate
   */
  character: PropTypes.oneOfType([number, string, node]),
  /**
   * Whether to allow semi selection
   */
  allowHalf: PropTypes.bool,
  /**
   * Customize tooltip by each character
   */
  tooltips: PropTypes.array,
  /**
   * If read only, unable to interact
   */
  disabled: PropTypes.bool,
};

export default Rate;
