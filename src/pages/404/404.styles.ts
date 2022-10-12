import styled from "styled-components";


export const Page404Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h1 {
    margin-top: 40px;
    font-size: 3.5rem;
  }

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
`