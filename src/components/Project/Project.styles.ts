import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h2 {
    font-size: 3.5rem;
    margin: 5px;
  }
`

export const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 1px solid #CFCFCF;
  box-shadow: 0 0 38px -5px rgba(67, 67, 70, 1);

  & h3 {
    font-size: 1.5rem;
    margin: 5px;
  }
  & img{
    width: 200px;
  }
  & p {
    margin: 5px;
    font-size: 1.3rem;
    padding: 5px;
  }
`

export const LinksContainer = styled.div`
  display: flex;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin: 5px;

    & svg {
      margin-top: 5px;
      font-size: 2rem;
      transition: .6s;

      &:hover {
        transform: translate(10%, 10%)
      }
    }


  }
`