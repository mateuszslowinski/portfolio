import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  background-color: #0B8BD4;
  margin: 0 auto;
  padding: 10px;
  
  & ul, li, a, div, svg {
    background-color: transparent;
  }

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
  }
 
  
  & img{
    width: 50px;
  }

  & ul {
    display: flex;
    width: 25%;
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
      color: #222224;
    }
  }

`