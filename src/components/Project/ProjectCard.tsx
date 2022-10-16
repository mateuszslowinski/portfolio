import {useState} from "react";
import {ImageModal} from "../Modal/ImageModal";
import {AiFillGithub} from "react-icons/ai";
import {BsEyeFill} from "react-icons/bs";
import {LinksContainer, ProjectDetails} from "./Project.styles";

interface Props {
    name: string
    image: string
    description: string
    links?: { name: string, url: string, }[]
    demo?: { url: string }
    info?: string

}

export const ProjectCard = ({name, image, description, links, demo, info}: Props) => {
    const [clickedImg, setClickedImg] = useState('')
    const handleClick = (name: string) => {
        setClickedImg(name)
    };
    const closeModal = () => {
        if (clickedImg !== '') {
            setClickedImg('')
        }
    }

    return (
        <ProjectDetails>
            <h3>{name}</h3>
            <img src={image} alt={`${name} zdjecie`} onClick={() => handleClick(name)}/>
            <p>{description}</p>
            <LinksContainer>
                {links?.map(link => (
                    <div>{link.name} <a href={link.url} target="_blank"><AiFillGithub/></a></div>
                ))}
                {demo && <div>Demo<a href={demo.url} target="_blank"><BsEyeFill/></a></div>}
                {info && <div>{info}</div>}
                {clickedImg && <ImageModal image={image} onClick={closeModal}/>}
            </LinksContainer>
        </ProjectDetails>
    )
}