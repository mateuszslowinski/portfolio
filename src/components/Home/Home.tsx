import {BsEmojiSmileFill} from 'react-icons/bs'
import {AsideContainer, DetailsContainer, HomePageContainer} from "./Home.styles";
import {MdDirectionsBike} from 'react-icons/md';
import {FaChess} from 'react-icons/fa'
import {IoGameController} from 'react-icons/io5'
import {VscBook} from 'react-icons/vsc'
import {HomeSvg} from "./Svgs/ Home.svg";
import {introduction} from "../../constants/description";
import {NavLink} from 'react-router-dom';

export const Home = () => {
    return (
        <HomePageContainer>
            <DetailsContainer>
                <h1>Witaj <BsEmojiSmileFill/></h1>
                <h2>Nazywam się Mateusz </h2>
                <h3>{introduction}</h3>
                <p>Oprócz programowania lubię spędzać wolny czas jeżdżąc <MdDirectionsBike/> czytając <VscBook/>
                    grając <IoGameController/>
                    <FaChess/>
                </p>
                <p>Sprawdź</p>
                <div>
                    <NavLink to='/projekty'>Projekty</NavLink>
                    <NavLink to='/technologie'>Technologie</NavLink>
                </div>
            </DetailsContainer>
            <AsideContainer>
                <HomeSvg/>
            </AsideContainer>
        </HomePageContainer>
    )
}