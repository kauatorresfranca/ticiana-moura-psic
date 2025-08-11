import { createGlobalStyle } from "styled-components";


export const colors = {
  primary: "#e7adad",
  primaryTransparent: "rgba(231, 173, 173, 0.35)",
  background: "#f9f9f9",
  title: "#5c5656",
  text: "#818181",
  white: "#ffffff"
};

export const breakpoints = {
  mobile: "768px", 
  tablet: "1024px",
  desktop: "1200px",
}

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: montserrat, sans-serif;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${colors.background};
  }

  .container {
    max-width: 1250px;
    margin: 0 auto;
  }

  }
`;