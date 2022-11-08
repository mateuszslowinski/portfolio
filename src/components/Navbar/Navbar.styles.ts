import { motion } from "framer-motion";
import styled from "styled-components";
import {device} from "../../constants/mediaQueries";
import {GlobalThemeProps} from "../../types/layout.types";

export const NavbarContainer = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 5px;
  width: 80%;
  margin: 0 auto;

  & div > a:hover {
    padding: 0;
  }

  & ul, li, a, div, svg {
    background-color: transparent;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 10px;

  }

  & img {
    width: 40px;
    height: 30px;

    ${device.desktop} {
      width: 50px;
      height: 40px;
    }
  }

  & ul {
    display: flex;
    align-items: center;
    list-style: none;
  }

  & li {
    margin: 0 10px;
  }

  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    text-decoration: none;
    transition: 0.8s;


    &:hover {
      color: ${({theme}: GlobalThemeProps) => theme.hoverColors};
      background-color: whitesmoke;
      padding: 5px;
    }
  }

  & svg {
    font-size: 2.5rem;
  }
`