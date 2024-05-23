import React from "react";
import { RateStar } from "./RateStar";
import styled from "styled-components";

const FilledStarConatiner = styled.div`
  color: rgba(250, 219, 20, 1);
`;

export const FilledStar = (props) => {
  return (
    <FilledStarConatiner>
      <RateStar {...props} />
    </FilledStarConatiner>
  );
};
