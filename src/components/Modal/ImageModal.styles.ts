import styled from "styled-components";

export const ImageModalContainer = styled.div`
  position: absolute;
  width: 80vw;

  & img {
    position: fixed;
    width: 80vw;
    height: 80vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
    z-index: 1;
    transition: .6s;
    background: transparent;

    &:hover {
      font-size: 7rem;
      transform: rotate(360deg);
    }
  }

  overflow: hidden;

`