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
        <section>
            {ProjectData.map(project => (
                <ProjectCard
                    key={project.image}
                    name={project.name}
                    description={project.description}
                    links={project.links}
                    demo={project.demo}
                />
            ))}
        </section>
    </ProjectContainer>
)
