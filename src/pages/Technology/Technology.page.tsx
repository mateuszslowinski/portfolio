import {technologyData} from "../../components/TechnologyCard/technology.data";
import {ImagesContainer, TechnologyContainer} from "../../components/TechnologyCard/Technology.styles";
import {TechnologyCard} from "../../components/TechnologyCard/TechnologyCard";


export const TechnologyPage = () => (
    <TechnologyContainer
        initial={{y: "100%"}}
        animate={{y: "0%"}}
        exit={{opacity: 1}}
        transition={{duration: 0.4, ease: 'easeOut'}}
    >
        <h2>Poznane technologie</h2>
        <div>
            <h3>Jezyki Programowania</h3>
            <ImagesContainer>
                {technologyData.language.map(item => (
                    <TechnologyCard key={item.image} name={item.name} image={item.image}/>
                ))}
            </ImagesContainer>
        </div>
        <div>
            <h3>Frontend</h3>
            <ImagesContainer>
                {technologyData.frontend.map(item => (
                    <TechnologyCard key={item.image} name={item.name} image={item.image}/>
                ))}
            </ImagesContainer>
        </div>
        <div>
            <h3>Backend</h3>
            <ImagesContainer>
                {technologyData.backend.map(item => (
                    <TechnologyCard key={item.image} name={item.name} image={item.image}/>
                ))}
            </ImagesContainer>
        </div>
        <div>
            <h3>Bazy danych</h3>
            <ImagesContainer>
                {technologyData.database.map(item => (
                    <TechnologyCard key={item.image} name={item.name} image={item.image}/>
                ))}
            </ImagesContainer>
        </div>
    </TechnologyContainer>
)
