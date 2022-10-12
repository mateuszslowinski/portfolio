import {Page404Container} from "./404.styles";
import {NavLink} from "react-router-dom";

export const Page404 = () => {
    return (
        <Page404Container>
            <h1>
                404. Nie znaleziono!
            </h1>
            <NavLink to='/'>Wróc na stronę główna</NavLink>
        </Page404Container>
    )
}