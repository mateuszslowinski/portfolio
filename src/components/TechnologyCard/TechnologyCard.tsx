interface Props {
    name: string
    image: string
}

export const TechnologyCard = ({name, image}: Props) => (
        <div>
            <img src={image} alt={name}/>
            <p>{name}</p>
        </div>
)