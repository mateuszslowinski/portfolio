import styled from "styled-components";
import {GlobalThemeProps} from "../../types/layout.types";

export const FooterContainer = styled.footer`
  width: 100%;
  border-top: 1px solid ${({ theme }: GlobalThemeProps) => theme.fontColor};
  border-bottom: 1px solid ${({ theme }: GlobalThemeProps) => theme.fontColor};
  text-align: center;
  padding: 10px;

  & p {
    font-size: 1.0rem;
  }
`