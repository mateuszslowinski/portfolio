import {LinksContainer, ProjectDetails} from "./Project.styles";
import {AiFillGithub} from "react-icons/ai";
import {BsEyeFill} from "react-icons/bs";

export const ProjectCard = () => (
    <ProjectDetails>
        <h3>nazwa projektu</h3>
        <img src="" alt="zdjecie"/>
        <p>krótki opis projektu</p>
        <LinksContainer>
            <div> frontend <a href="#"><AiFillGithub/></a></div>
            <div>demo<a href="#"><BsEyeFill/></a></div>
            <div>backend<a href="#"><AiFillGithub/></a></div>
        </LinksContainer>
    </ProjectDetails>
)