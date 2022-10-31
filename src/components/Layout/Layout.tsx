import React, {ReactNode, useState} from "react";
import {Navbar} from "../Navbar/Navbar";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "../../constants/themes";
import {LayoutContainer, PageContainer} from "./Layout.styles";
import {GlobalStyles,} from "../../GlobalStyles";

interface Props {
    content: ReactNode
    footer: ReactNode
}

export const Layout = ({content, footer}: Props) => {
    const [theme, setTheme] = useState('dark')

    const themeToggle = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <LayoutContainer>
                <Navbar onClick={themeToggle} theme={theme}/>
                <PageContainer>{content}</PageContainer>
                <div>{footer}</div>
            </LayoutContainer>
        </ThemeProvider>
    )
}