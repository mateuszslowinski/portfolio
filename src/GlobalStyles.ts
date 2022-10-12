import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Karla, sans-serif;
    font-size: 10px;
    background-color: #222224;
    color: whitesmoke;
    scroll-behavior: smooth;
  }

  #root {
    margin: 0 auto;
  }
`