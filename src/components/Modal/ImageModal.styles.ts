import {motion} from "framer-motion";
import styled from "styled-components";
import {device} from "../../constants/mediaQueries";

export const ImageModalContainer = styled(motion.div)`
  position: fixed;

  & img {
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;

    ${device.tablet} {
      width: 80vw;
      top: 45%;
      left: 50%;
    }
  }

  & button {
    position: fixed;
    top: 0;
    right: 0;
    margin: 20px;
    font-size: 5rem;
    padding: 5px;
    border: none;
    color: red;
    cursor: pointer;
    z-index: 2;
    transition: .6s;
    background: transparent;
    overflow: hidden;
    
    &:hover {
      font-size: 7rem;
      transform: rotate(360deg);
    }
  }
`