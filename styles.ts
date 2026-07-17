import { createGlobalStyle } from "styled-components";

export const colors = {
  primary: "#B89A7A",
  primaryTransparent: "rgba(139, 111, 90, 0.35)",
  background: "#F5F1EB",
  title: "#5c5656",
  text: "#818181",
  white: "#ffffff"
};

export const breakpoints = {
  mobile: "768px", 
  tablet: "1024px",
  desktop: "1200px",
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${colors.background};
    color: ${colors.text};
    -webkit-font-smoothing: antialiased;
  }

  .container {
    max-width: 1250px;
    width: 100%;
    margin: 0 auto;
    padding: 0 24px; /* Garante um espaçamento seguro nas laterais em telas menores */
  }
`;