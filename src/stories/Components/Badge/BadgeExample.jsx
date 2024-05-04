import React from "react";
import Badge from "./Badge";
import styled from "styled-components";
import { findTokenValue } from "../../../utility";

const Profile = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 0.625rem;
  background-color: ${({ theme }) =>
    findTokenValue(theme["Badge-colorTextPlaceholder"], theme)};
`;

export const BadgeExample = (props) => {
  return (
    <Badge $count={2} $status={"error"} {...props}>
      <Profile></Profile>
    </Badge>
  );
};
