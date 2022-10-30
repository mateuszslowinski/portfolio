import {ProjectCard} from "../../components/Project/ProjectCard";
import {ProjectData} from "../../components/Project/project.data";
import {ProjectContainer} from "../../components/Project/Project.styles";


export const ProjectPage = () => (
    <ProjectContainer
        initial={{y: "100%"}}
        animate={{y: "0%"}}
        exit={{opacity: 1}}
        transition={{duration: 0.4, ease: 'easeOut'}}
    >
        <h2>Dotychczasowe projekty</h2>
        <div>
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
        </div>
    </ProjectContainer>
)
