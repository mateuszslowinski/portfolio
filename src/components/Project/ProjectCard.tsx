import {LinksContainer, ProjectDetails} from "./Project.styles";
import {AiFillGithub} from "react-icons/ai";
import {BsEyeFill} from "react-icons/bs";

interface Props {
    name: string
    image: string
    description: string
    links?: { name: string, url: string, }[]
    demo?: { url: string }
    info?:string

}


export const ProjectCard = ({name, image, description, links, demo,info}: Props) => {
    console.log(demo)
    return (
        <ProjectDetails>
            <h3>{name}</h3>
            <img src={image} alt={`${name} zdjecie`}/>
            <p>{description}</p>
            <LinksContainer>
                {links?.map(link => (
                    <div>{link.name} <a href={link.url} target="_blank"><AiFillGithub/></a></div>
                ))}
                {demo && <div>demo<a href={demo.url} target="_blank"><BsEyeFill/></a></div>}
                {info && <div>{info}</div>}
            </LinksContainer>
        </ProjectDetails>
    )
}