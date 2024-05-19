import React from "react";
import styled from "styled-components";
import Tooltip from "./Tooltip";
import Button from "../Button";

const FixedContainer = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid lightgray;
  overflow: auto;
`;

const InnerContainer = styled.div`
  padding: 1rem;
  height: 1000px;
`;

const DownLittle = styled.div`
  margin-top: 5rem;
`;

export const TooltipShift = (props) => {
  return (
    <FixedContainer>
      <InnerContainer>
        <DownLittle>
          <Tooltip {...props}>
            <Button
              $shape="Default"
              $size="Default"
              $type="Primary"
              label="Hover"
            />
          </Tooltip>
        </DownLittle>
      </InnerContainer>
    </FixedContainer>
  );
};
