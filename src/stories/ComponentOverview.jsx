import React from "react";
import styled from "styled-components";
import { GlobalStyle } from "../utility";

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  border-radius: 0.125rem;
  border: 1px solid rgba(0, 0, 0, 0.06);
  width: 18.0625rem;
  height: 13.5rem;
  flex-grow: 1;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    box-shadow:
      0px 1px 1px rgba(3, 7, 18, 0.02),
      0px 5px 4px rgba(3, 7, 18, 0.03),
      0px 12px 9px rgba(3, 7, 18, 0.05),
      0px 20px 15px rgba(3, 7, 18, 0.06),
      0px 32px 24px rgba(3, 7, 18, 0.08);
  }
`;

const Title = styled.div`
  color: rgba(0, 0, 0, 0.85);
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  margin: 0;
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;

const Image = styled.div`
  align-self: center;
  flex-grow: 1;
  margin-top: auto;
  display: flex;
  align-items: center;
`;

export const ComponentOverview = ({ url, text }) => {
  return (
    <Container>
      <GlobalStyle />
      <Title>{text}</Title>
      <Image>
        <img src={url} alt="preview img" />
      </Image>
    </Container>
  );
};
