import React from "react";
import { generateBgColor } from "./Toolitip.helpers";

export const TooltipArrow = ({ color }) => {
  return (
    <svg
      width="12"
      height="6"
      viewBox="0 0 12 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_160623_170895)">
        <path
          d="M5.65686 -5.65871L11.3137 -0.00185251L7.07107 4.24079C6.29003 5.02184 5.0237 5.02184 4.24265 4.24079L6.19888e-06 -0.00185251L5.65686 -5.65871Z"
          fill={generateBgColor(color)}
        />
      </g>
      <defs>
        <clipPath id="clip0_160623_170895">
          <rect width="11.3137" height="5.655" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
