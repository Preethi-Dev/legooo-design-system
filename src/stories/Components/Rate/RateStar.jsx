import { StarFilled } from "@ant-design/icons";
import React from "react";

export const RateStar = ({ character }) => {
  return character ? character : <StarFilled />;
};
