import styled from "styled-components";
import {device} from "../../constants/mediaQueries";
import {motion} from "framer-motion";

export const TechnologyContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  min-height: calc(100vh - 110px);

  ${device.tablet} {
    width: 70%;
    margin: 0 auto;
  }

  & > div {
    width: 100%;
    text-align: center;
    margin-top: 10px;
  }

  & h2 {
    font-size: 3.5rem;
    padding: 10px;
    color: #0B8BD4;
    text-transform: uppercase;
  }

  & h3 {
    font-size: 2rem;
    width: 40%;
    margin: 0 auto;
  }

  & p {
    font-size: 1.4rem;

    &:first-letter {
      text-transform: uppercase;
    }
  }

  & img {
    width: 100px;
    height: 60px;
    padding: 5px;
    margin-right: 5px;
    background-color: ivory;
  }
`

export const ImagesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 10px;

  & > div {
    width: 30%;
    margin: 5px;

    ${device.tablet} {
      width: 20%;
    }

    ${device.desktop} {
      width: 10%;
    }
  }
`