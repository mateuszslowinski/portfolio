import styled from "styled-components";
import {device} from "../../constants/mediaQueries";

export const HomePageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  min-height: calc(100vh - 110px);

  ${device.desktop} {
    flex-wrap: nowrap;
    padding: 10px;
  }
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;

  & h1 {
    margin-top: 20px;
    font-size: 4.5rem;
    color: #0B8BD4;

    ${device.desktop} {
      font-size: 5rem;
    }

    & svg {
      font-size: 3.5rem;
    }
  }

  & h2 {
    font-size: 3.0rem;
    color: #0B8BD4;
    margin-bottom: 20px;

    ${device.desktop} {
      font-size: 3.5rem;
    }
  }

  & h3 {
    font-size: 1.7rem;
    margin: 10px 0;
    padding: 10px;

    ${device.desktop} {
      font-size: 2rem;
    }
  }

  & p {
    font-size: 1.5rem;
    padding: 10px;

    ${device.desktop} {
      font-size: 2rem;
    }

    & svg {
      margin: 5px 5px 0 0
    }
  }


  & svg {
    font-size: 2rem;
  }

  & div {
    display: flex;

    & a {
      margin: 10px;
      padding: 10px;
      font-size: 2rem;
      border: 1px solid #0B8BD4;
      text-decoration: none;
      transition: .7s;

      &:hover {
        color: #222224;
        background-color: ivory;
      }
    }
  }

`
export const AsideContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: transparent;


  & svg {
    height: 300px;
    width: 350px;

    ${device.tablet} {
      width: 600px;
    }

    & g #first {
      animation: move 5s ease 1s infinite;

    }

    & g #third {
      animation: move 5s ease 1s infinite;
    }

    & g #second {
      animation: move 5s ease 1s infinite;
    }

    & g #fourth {
      animation: move 5s ease 1s infinite;
    }
  }


  @keyframes move {
    0% {
      transform: rotateY(0deg)
    }
    50% {
      transform: rotateY(10deg)
    }
    100% {
      transform: rotateY(0deg)
    }
  }

`
