import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: montserrat, sans-serif;
  }

  body {
    background-color: #ffffff;
  }

  .container {
    max-width: 1250px;
    margin: 0 auto;
  }
`;

export const colors = {
  primary: "#e7adad",
  primaryTransparent: "rgba(231, 173, 173, 0.35)",
  title: "#5c5656",
  text: "#818181",
};

export const breakpoints = {
  mobile: "768px", 
  tablet: "1024px",
  desktop: "1200px",
}