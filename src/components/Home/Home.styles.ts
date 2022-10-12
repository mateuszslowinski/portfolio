import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 110px);
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;

  & h1 {
    font-size: 5rem;
    color: #0B8BD4;

    & svg {
      font-size: 3.5rem;
    }
  }

  & h2 {
    font-size: 3.5rem;
    color: #0B8BD4;
    margin-bottom: 20px;
  }

  & h3 {
    font-size: 2rem;
    margin: 10px 0;
    padding: 10px;
  }

  & p {
    font-size: 2rem;
    padding: 10px;

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
  background: transparent;


  & svg {
    width: 600px;

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
