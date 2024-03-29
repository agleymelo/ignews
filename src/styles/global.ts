import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --cyan-500: #61DCFB;
    --green-500: #04D361;
    --yellow-500: #EBA417;
    --white: #fff;

    --gray-100: #E1E1E6;
    --gray-300: #A8A8B3;
    --gray-700: #323238;
    --gray-800: #29292e;
    --gray-850: #1f2729;
    --gray-900: #121414;

    --shape: #1F2729;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 16 * 0,9375 = 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5% // 16 * 0,9374 = 14px
    }
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
