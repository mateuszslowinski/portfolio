import {ProjectContainer} from "../../components/Project/Project.styles";

import {ProjectCard} from "../../components/Project/ProjectCard";


export const ProjectPage = () => {
    return (
        <ProjectContainer>
            <h2>Dotychczasowe projekty</h2>
            <ProjectCard/>
        </ProjectContainer>
    )
}