import {ProjectCard} from "../../components/Project/ProjectCard";
import {ProjectData} from "../../components/Project/project.data";
import {ProjectContainer} from "../../components/Project/Project.styles";


export const ProjectPage = () => (
    <ProjectContainer>
        <h2>Dotychczasowe projekty</h2>
        {ProjectData.map(project => (
            <ProjectCard
                name={project.name}
                image={project.image}
                description={project.description}
                links={project.links}
                demo={project.demo}
                info={project.info}
            />
        ))}
    </ProjectContainer>
)
