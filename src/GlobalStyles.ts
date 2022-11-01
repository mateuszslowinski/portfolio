import { createGlobalStyle } from "styled-components";
import {GlobalThemeProps} from "./types/layout.types";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Karla, sans-serif;
    font-size: 10px;
    background-color:${({ theme }: GlobalThemeProps) => theme.backGroundColor};
    color: ${({ theme }: GlobalThemeProps) => theme.fontColor};
    scroll-behavior: smooth;
  }

  #root {
    margin: 0 auto;
  }
`