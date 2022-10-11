import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {HomePage} from "./pages/Home/Home.page";
import {Navbar} from "./components/Navbar/Navbar";
import {Layout} from "./components/Layout/Layout";
import {Footer} from "./components/Footer/Footer";

export const App = () => {
    const header = <Navbar/>
    const footer = <Footer/>

    const content = (
        <Routes>
            <Route path='/' element={<HomePage/>}>
            </Route>
        </Routes>
    )

    return (
        <Layout
            header={header}
            content={content}
            footer={footer}
        />
    );
}