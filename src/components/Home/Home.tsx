import {NavLink} from 'react-router-dom';
import {HomeSvg} from "./Svgs/ Home.svg";
import {MdDirectionsBike} from 'react-icons/md';
import {FaChess} from 'react-icons/fa'
import {IoGameController} from 'react-icons/io5'
import {VscBook} from 'react-icons/vsc'
import {introduction} from "../../constants/description";
import {AsideContainer, DetailsContainer, HomePageContainer} from "./Home.styles";
import {useEffect, useState} from "react";

export const Home = () => {
    const [text, setText] = useState<string>('');
    const chars = ' Witaj, jestem Mateusz'.split('');

    useEffect(() => {
        setTimeout(() => {
            const timer = setTimeout(() => {
                setText((prevText) => {
                    if (prevText.length !== chars.length) {
                       return prevText.concat(chars[prevText.length])
                    }
                    return prevText
                })
            }, 500)
            return () => clearTimeout(timer)
        })
    })

    return (
        <HomePageContainer>
            <DetailsContainer>
                <h1>{text}</h1>
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