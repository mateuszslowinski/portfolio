import {NavLink} from "react-router-dom"
import {NavbarContainer} from "./Navbar.styles";

export const Navbar = () => (
    <NavbarContainer>
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
            </ul>
        </div>
    </NavbarContainer>
)
