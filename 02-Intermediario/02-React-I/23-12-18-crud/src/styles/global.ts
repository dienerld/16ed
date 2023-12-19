import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root{
    line-height: 1.5;
    font-weight: 400;
    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    color: ${({ theme }) => theme.colors.textColor};
    /* color: ${(props) => props.theme.colors.textColor}; */
    font-family: Open Sans, sans-serif;
    line-height: 140%;
    background-color: ${(props) => props.theme.colors.backgroundColor};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family:  Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  }

  img {
    width: 100%;
  }
`;
