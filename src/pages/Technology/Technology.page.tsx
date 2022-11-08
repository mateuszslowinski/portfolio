import {technologyData} from "../../components/TechnologyCard/technology.data";
import {ImagesContainer, TechnologyContainer} from "../../components/TechnologyCard/Technology.styles";
import {TechnologyCard} from "../../components/TechnologyCard/TechnologyCard";

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
        x: 200,
    },
    show: {
        opacity: 1,
        x: 0,
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

export const TechnologyPage = () => (
    <TechnologyContainer
        variants={container}
        initial='hidden'
        animate='show'
        exit='exit'
    >
        <h2>Poznane technologie</h2>
        <div>
            <h3>Jezyki Programowania</h3>
            <ImagesContainer variants={item}>
                {technologyData.language.map(item => (
                    <TechnologyCard key={item.image} name={item.name} image={item.image}/>
                ))}
            </ImagesContainer>
        </div>
        <div>
            <h3>Frontend</h3>
            <ImagesContainer variants={item}>
                {technologyData.frontend.map(item => (
                    <TechnologyCard key={item.image} name={item.name} image={item.image}/>
                ))}
            </ImagesContainer>
        </div>
        <div>
            <h3>Backend</h3>
            <ImagesContainer variants={item}>
                {technologyData.backend.map(item => (
                    <TechnologyCard key={item.image} name={item.name} image={item.image}/>
                ))}
            </ImagesContainer>
        </div>
        <div>
            <h3>Bazy danych</h3>
            <ImagesContainer variants={item}>
                {technologyData.database.map(item => (
                    <TechnologyCard key={item.image} name={item.name} image={item.image}/>
                ))}
            </ImagesContainer>
        </div>
    </TechnologyContainer>
)
