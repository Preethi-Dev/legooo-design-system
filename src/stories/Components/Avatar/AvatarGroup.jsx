import React from "react";
import styled from "styled-components";

const AvatarGroupContainer = styled.div`
  display: inline-flex;
  position: relative;
  align-items: center;
`;

const Avatar = styled.span`
  position: absolute;
  left: ${(props) =>
    props.$index * 25}px; /* Adjust the value to control the overlap */
`;

export const AvatarGroup = ({ children }) => {
  return (
    <AvatarGroupContainer>
      {children.map((child, index) => (
        <Avatar $index={index} key={index}>
          {child}
        </Avatar>
      ))}
    </AvatarGroupContainer>
  );
};
