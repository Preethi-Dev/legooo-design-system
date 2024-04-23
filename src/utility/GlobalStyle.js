import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html{
    font-size: 16px;
    box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}
body {
  margin: 0;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  width: 90%;
  margin: 0 auto;
}
`;
