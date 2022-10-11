import {ImagesContainer, TechnologyContainer} from "./Technology.styles";

export const Technology = () => {
    return (
        <TechnologyContainer>
            <h2>Poznane technologie</h2>
            <div>
                <h3>Jezyki Programowania</h3>
                <ImagesContainer>
                    <div>
                        <img src={`/images/technologyImages/javascript.svg`} alt="javascript"/>
                        <p>JavaScript</p>
                    </div>
                    <div>
                        <img src={`/images/technologyImages/typescript.svg`} alt="typescript"/>
                        <p>Typescript</p>
                    </div>
                </ImagesContainer>
            </div>
            <div>
                <h3>Frontend</h3>
                <ImagesContainer>
                    <div>
                        <img src={`/images/technologyImages/html5.png`} alt="html"/>
                        <p>Html</p>
                    </div>
                    <div>
                        <img src={`/images/technologyImages/css3.svg`} alt="css"/>
                        <p>Css</p>
                    </div>
                    <div>
                        <img src={`/images/technologyImages/react.png`} alt="react"/>
                        <p>React</p>
                    </div>
                    <div>
                        <img src={`/images/technologyImages/styled-components.svg`} alt="styled-components"/>
                        <p>Styled-components</p>
                    </div>
                    <div>
                        <img src={`/images/technologyImages/bootstrap-logo.png`} alt="bootstrap"/>
                        <p>Bootstrap</p>
                    </div>
                    <div>
                        <img src={`/images/technologyImages/sass-1.svg`} alt="sass"/>
                        <p>Sass</p>
                    </div>
                </ImagesContainer>
            </div>
            <div>
                <h3>Backend</h3>
                <ImagesContainer>
                    <div>
                        <img src={`/images/technologyImages/node.svg`} alt="node"/>
                        <p>NodeJs</p>
                    </div>
                    <div>
                        <img src={`/images/technologyImages/express.svg`} alt="express"/>
                        <p>ExpressJs</p>
                    </div>
                    <div>
                        <img src={`/images/technologyImages/nestjs.svg`} alt="nestjs"/>
                        <p>NestJs</p>
                    </div>
                </ImagesContainer>
            </div>
            <div>
                <h3>Bazy danych</h3>
                <ImagesContainer>
                    <div>
                        <img src={`/images/technologyImages/mySql.svg`} alt="mysql"/>
                        <p>MySql</p>
                    </div>
                    <div>
                        <img src={`/images/technologyImages/mongodb.svg`} alt="mongodb"/>
                        <p>MongoDb</p>
                    </div>
                    <div>
                        <img src={`/images/technologyImages/typeorm.png`} alt="typeorm"/>
                        <p>TypeOrm</p>
                    </div>
                    <div>
                        <img src={`/images/technologyImages/prisma-2.svg`} alt="prisma"/>
                        <p>Prisma</p>
                    </div>
                </ImagesContainer>
            </div>
        </TechnologyContainer>
    )
}