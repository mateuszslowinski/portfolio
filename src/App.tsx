import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {HomePage} from "./pages/Home/Home.page";
import {Navbar} from "./components/Navbar/Navbar";
import {Layout} from "./components/Layout/Layout";
import {Footer} from "./components/Footer/Footer";
import {Technology} from "./components/Technology/Technology";

export const App = () => {
    const header = <Navbar/>
    const footer = <Footer/>

    const content = (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/technologie' element={<Technology/>}/>
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