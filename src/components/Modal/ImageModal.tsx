import {ImageModalContainer} from "./ImageModal.styles";

interface Props {
    image: string
    onClick: () => void
}

const dropIn = {
    hidden: {opacity: 0,},
    visible: {opacity: 1,},
}

export const ImageModal = ({image, onClick}: Props) => (
    <ImageModalContainer
        variants={dropIn}
        initial='hidden'
        animate='visible'
        exit='exit'
    >
        <button onClick={onClick}>X</button>
        <img src={image} alt="zdjecie projektu"/>
    </ImageModalContainer>
)
