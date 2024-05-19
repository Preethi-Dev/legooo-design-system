import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TooltipInner } from "./TooltipInner";
import { generateTooltipPosition } from "./Toolitip.helpers";
import { useRef } from "react";

const TooltipContainer = styled.div`
  display: inline-flex;
  position: relative;
`;
const TooltipHolder = styled.div`
  display: inline-flex;
`;

const TooltipContent = styled.div`
  min-width: max-content;
  position: absolute;
  z-index: 999;
  ${({ $placement, $rect }) => generateTooltipPosition($placement, $rect)}
`;

const Tooltip = ({ title, placement, color, open, children }) => {
  const [isShow, setIsShow] = useState(open || false);
  const [Rect, setRect] = useState(null);
  const tooltipHolderRef = useRef(null);

  useEffect(() => {
    setRect(tooltipHolderRef.current.getBoundingClientRect());
  }, [tooltipHolderRef]);

  const handleMouseEnter = () => {
    tooltipHolderRef.current &&
      setRect(tooltipHolderRef.current.getBoundingClientRect());
    setIsShow(true);
  };

  const handleMouseLeave = () => {
    setIsShow(false);
  };

  return (
    <TooltipContainer>
      {Rect && isShow && (
        <TooltipContent $placement={placement} $rect={Rect}>
          <TooltipInner
            title={title}
            placement={placement}
            color={color}
            $rect={Rect}
          />
        </TooltipContent>
      )}

      <TooltipHolder
        ref={tooltipHolderRef}
        onMouseEnter={(e) => !open && handleMouseEnter(e)}
        onMouseLeave={(e) => !open && handleMouseLeave(e)}
      >
        {children}
      </TooltipHolder>
    </TooltipContainer>
  );
};

Tooltip.defaultProps = {
  title: "prompt text",
  placement: "bottom",
  color: "black",
  open: false,
};

Tooltip.propTypes = {
  /**
   * Tooltip title
   */
  title: PropTypes.string,
  /**
   * The position of the tooltip relative to the target, which can be one of
   */
  placement: PropTypes.oneOf([
    "topLeft",
    "top",
    "topRight",
    "leftTop",
    "left",
    "leftBottom",
    "rightTop",
    "right",
    "rightBottom",
    "bottomLeft",
    "bottom",
    "bottomRight",
  ]),
  /**
   * The background color
   */
  color: PropTypes.string,
  /**
   * Whether the floating tooltip card is open or not while page load
   */
  open: PropTypes.bool,
};

export default Tooltip;
