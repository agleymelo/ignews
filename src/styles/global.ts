import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --cyan-500: #61DCFB;
    --green-500: #04D361;
    --yellow-500: #EBA417;
    --white: #fff;

    --gray-100: #E1E1E6;
    --gray-300: #A8A8B3;
    --gray-900: #121414;

    --shape: #1F2729;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--gray-900);
    color: var(--white)
  }

  body, input, textarea, select, button {
    font: 400 1rem "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

`;
