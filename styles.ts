import { createGlobalStyle } from 'styled-components'

export const palette = {
  sand: '#dbc3ad',
  sandLight: '#EDE1D6',
  sandDark: '#C4AD98',
  brown: '#422e22',
  brownSoft: '#6b4a36',
}

/* Legado: aponta para a nova paleta. Apague quando todos os componentes usarem `palette`. */
export const colors = {
  primary: palette.brown,
  primaryTransparent: 'rgba(66, 46, 34, 0.12)',
  background: palette.sandLight,
  title: palette.brown,
  text: '#5b4436',
  white: '#ffffff',
}

export const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1200px',
}

export const GlobalStyle = createGlobalStyle`
  :root {
    --font-title: 'Inter', sans-serif;
    --font-title-weight: 800; /* 900 = Inter Black */
    --font-body: 'Montserrat', sans-serif;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px; /* só necessário se houver header fixo */
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
  }

  body {
    font-family: var(--font-body);
    line-height: 1.5;
    background-color: ${colors.background};
    color: ${colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-title);
    font-weight: var(--font-title-weight);
    letter-spacing: -0.03em;
    line-height: 1.1;
  }

  img, picture, video {
    display: block;
    max-width: 100%;
    height: auto;
  }

  svg {
    flex-shrink: 0;
  }

  button, input, textarea, select {
    font: inherit;
    color: inherit;
  }

  ::selection {
    background: ${palette.brown};
    color: ${palette.sand};
  }

  .container {
    max-width: 1250px;
    width: 100%;
    margin: 0 auto;
    padding: 0 24px;
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
`