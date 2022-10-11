import styled from "styled-components";

export const TechnologyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 5px;

  & > div {
    margin: 10px;
    width: 100%;
    text-align: center;
  }

  & h2 {
    font-size: 3.5rem;
    margin: 10px;
    padding: 10px;
    background-color: #4D4D4D;
    color: #F7F7F7;
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
  margin-top: 10px;

  & > div {
    margin-right: 10px;
  }
`