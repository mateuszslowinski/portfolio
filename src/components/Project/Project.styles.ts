import styled from "styled-components";
import {device} from "../../constants/mediaQueries";

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  min-height: calc(100vh - 110px);


  & h2 {
    font-size: 3.5rem;
    color: #0B8BD4;
    margin: 10px;
  }
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`

export const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 10px;
  border: 1px solid #CFCFCF;
  box-shadow: 0 0 38px -5px rgba(67, 67, 70, 1);
  
  ${device.tablet} {
    width: 40%;
    min-height: 350px;
  }
  
  
  & h3 {
    font-size: 1.7rem;
    margin: 10px 0 ;
  }
  & img{
    width: 300px;
    cursor: pointer;
  }
  & p {
    margin: 15px 10px 10px;
    font-size: 1.2rem;
    padding: 0 20px;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  margin-bottom: 20px;

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