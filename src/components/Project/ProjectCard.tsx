import {AiFillGithub} from "react-icons/ai";
import {BsEyeFill} from "react-icons/bs";
import {LinksContainer, ProjectDetails} from "./Project.styles";

interface Props {
    name: string
    image?: string
    description: string
    links?: { name: string, url: string, }[]
    demo?: { url: string }
}

export const ProjectCard = ({name, description, links, demo,}: Props) => (
    <ProjectDetails>
        <h3>{name}</h3>
        <p>{description}</p>
        <LinksContainer>
            {links?.map(link => (
                <div key={link.url}>
                    {link.name}
                    <a href={link.url} target="_blank"><AiFillGithub/></a>
                </div>
            ))}
            {demo
                ? <div>Demo
                    <a href={demo.url} target="_blank"><BsEyeFill/></a>
                </div>
                : null}
        </LinksContainer>
    </ProjectDetails>
)
