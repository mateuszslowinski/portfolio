import {AiFillGithub} from "react-icons/ai";
import {BsEyeFill} from "react-icons/bs";
import {LinksContainer, ProjectDetails, TechnologyContainer} from "./Project.styles";

interface Props {
    name: string
    image?: string
    description: string
    links?: { name: string, url: string, }[]
    demo?: { url: string }
    technology: string[]
    variants: {}
}

export const ProjectCard = ({name, description, links, demo, technology,variants}: Props) => (
    <ProjectDetails variants={variants}>
        <h3>{name}</h3>
        <p>{description}</p>
        <LinksContainer>
            {demo
                ? <div>Demo
                    <a href={demo.url} target="_blank"><BsEyeFill/></a>
                </div>
                : null}
            {links?.map(link => (
                <div key={link.url}>
                    {link.name}
                    <a href={link.url} target="_blank"><AiFillGithub/></a>
                </div>
            ))}
        </LinksContainer>
        <TechnologyContainer>
            {technology.map(name => (
                <p key={name}>{name}</p>
            ))}
        </TechnologyContainer>
    </ProjectDetails>
)
