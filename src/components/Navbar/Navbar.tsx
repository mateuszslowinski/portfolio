import {NavLink} from "react-router-dom"
import {NavbarContainer} from "./Navbar.styles";
import {TiStarburstOutline} from 'react-icons/ti'

export const Navbar = () => {
    return (
        <NavbarContainer>
            <div>
                <NavLink to='/'><TiStarburstOutline/></NavLink>
                <ul>
                    <li><NavLink to='/'>Strona główna</NavLink></li>
                    <li>
                        <NavLink to='/projekty'>Projekty</NavLink>
                    </li>
                    <li>
                        <NavLink to='/technologie'>Technologie</NavLink>
                    </li>
                </ul>
            </div>

        </NavbarContainer>
    )
}