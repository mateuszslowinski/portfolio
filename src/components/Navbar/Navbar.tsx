import {NavLink} from "react-router-dom"
import {BsToggleOn, BsToggleOff} from 'react-icons/bs'
import {NavbarContainer} from "./Navbar.styles";

interface Props {
    onClick: () => void
    theme: string
}

export const Navbar = ({onClick, theme}: Props) => (
    <NavbarContainer
        initial={{opacity: 0, y: -180}}
        animate={{opacity: 1, y: 0}}
        transition={{ease: 'easeInOut', duration: 1}}
    >
        <div>
            <NavLink to='/'><img src="/images/logo.png" alt="logo"/></NavLink>
            <ul>
                <li><NavLink to='/'>Strona główna</NavLink></li>
                <li>
                    <NavLink to='/projekty'>Projekty</NavLink>
                </li>
                <li>
                    <NavLink to='/technologie'>Technologie</NavLink>
                </li>
                {theme === 'light' ? <BsToggleOn onClick={onClick}/> : <BsToggleOff onClick={onClick}/>}
            </ul>
        </div>
    </NavbarContainer>
)