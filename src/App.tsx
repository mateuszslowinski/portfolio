import React from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion';
import {HomePage} from "./pages/Home/Home.page";
import {Layout} from "./components/Layout/Layout";
import {Footer} from "./components/Footer/Footer";
import {TechnologyPage} from "./pages/Technology/Technology.page";
import {ProjectPage} from "./pages/Project/Project.page";
import {Page404} from "./pages/404/404.page";

export const App = () => {
    const location= useLocation();
    const footer = <Footer/>

    const content = (
        <AnimatePresence initial={false} mode={'wait'}>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/projekty' element={<ProjectPage/>}/>
                <Route path='/technologie' element={<TechnologyPage/>}/>
                <Route path='*' element={<Page404/>}/>
            </Routes>
        </AnimatePresence>
    )

    return (
        <Layout
            content={content}
            footer={footer}
        />
    );
}