import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {HomePage} from "./pages/Home/Home.page";
import {Navbar} from "./components/Navbar/Navbar";
import {Layout} from "./components/Layout/Layout";
import {Footer} from "./components/Footer/Footer";
import {TechnologyPage} from "./pages/Technology/Technology.page";
import {ProjectPage} from "./pages/Project/Project.page";
import {Page404} from "./pages/404/404.page";

export const App = () => {
    const header = <Navbar/>
    const footer = <Footer/>

    const content = (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/projekty' element={<ProjectPage/>}/>
            <Route path='/technologie' element={<TechnologyPage/>}/>
            <Route path='*' element={<Page404/>}/>
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