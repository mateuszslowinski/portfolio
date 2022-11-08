import {ProjectCard} from "../../components/Project/ProjectCard";
import {ProjectData} from "../../components/Project/project.data";
import {ProjectContainer} from "../../components/Project/Project.styles";
import {motion} from "framer-motion";

const container = {
    show: {
        transition: {
            staggerChildren: 0.35,
        }
    }
}
const item = {
    hidden: {
        opacity: 0,
        y: 200,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [.6, .01, -.05, .95],
            duration: 1
        }
    },
    exit: {
        opacity: 0,
        y: -200,
        transition: {
            ease: 'easeInOut',
            duration: 0.8,
        }
    }
}

export const ProjectPage = () => (
    <ProjectContainer
        variants={container}
        initial='hidden'
        animate='show'
        exit='exit'
    >
        <motion.h2
            exit={{opacity: 0}}
            transition={{ease: 'easeInOut', duration: 0.8}}
        >Dotychczasowe projekty
        </motion.h2>
        <section>
            {ProjectData.map(project => (
                <ProjectCard
                    key={project.image}
                    name={project.name}
                    description={project.description}
                    links={project.links}
                    demo={project.demo}
                    technology={project.technology}
                    variants={item}
                />
            ))}
        </section>
    </ProjectContainer>
)
