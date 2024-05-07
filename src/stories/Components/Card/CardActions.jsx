import { nanoid } from "nanoid";
import React from "react";
import styled from "styled-components";
import { findTokenValue } from "../../../utility";

const ActionsContainer = styled.div`
  display: flex;
  padding: 0.75rem 0rem;
  align-items: center;
`;

const Action = styled.div`
  flex-grow: 1;
  text-align: center;
  border-right: 1px solid
    ${({ theme }) => findTokenValue(theme["Card-colorBorderSecondary"], theme)};
  color: ${({ theme }) =>
    findTokenValue(theme["Card-colorTextDescription"], theme)};
`;

export const CardActions = ({ $actions }) => {
  return (
    <ActionsContainer>
      {$actions &&
        $actions.map((action, index) => (
          <Action
            key={nanoid()}
            style={{ borderRight: index === $actions.length - 1 && "none" }}
          >
            {action}
          </Action>
        ))}
    </ActionsContainer>
  );
};
