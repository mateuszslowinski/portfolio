import {ImageModalContainer} from "./ImageModal.styles";

interface Props {
    image: string
    onClick: () => void
}

export const ImageModal = ({image, onClick}: Props) => (
    <ImageModalContainer>
        <button onClick={onClick}>X</button>
        <img src={image} alt=""/>
    </ImageModalContainer>
)
