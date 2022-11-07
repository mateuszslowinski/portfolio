import {motion} from "framer-motion";
import styled from "styled-components";
import {device} from "../../constants/mediaQueries";
import {GlobalThemeProps} from "../../types/layout.types";

export const ProjectContainer = styled(motion.div)`
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

  & section {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }
`

export const ProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 20px;
  width: 80%;
  box-shadow: 0 0 20px -5px rgba(60, 60, 70, 1);
  min-height: 300px;

  ${device.desktop} {
    width: 24%;
  }

  & h3 {
    font-size: 1.7rem;
    margin: 10px auto 0;
    padding: 10px;
    color: ${({ theme }: GlobalThemeProps) => theme.backGroundColor}; ;
    background-color:  ${({ theme }: GlobalThemeProps) => theme.weatheredColor};
  }

  & p {
    font-size: 1.2rem;
    padding: 10px;
  }
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto 10px;

  & div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
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
export const TechnologyContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  & p {
    color: ${({ theme }: GlobalThemeProps) => theme.weatheredColor};
    font-size: 1.2rem;
  }

`