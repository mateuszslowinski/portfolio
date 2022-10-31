import React, {ReactNode, useState} from "react";
import {LayoutContainer, PageContainer} from "./Layout.styles";
import {ThemeProvider} from "styled-components";
import {GlobalStyles,} from "../../GlobalStyles";
import {darkTheme, lightTheme} from "../../constants/themes";

interface Props {
    header: ReactNode
    content: ReactNode
    footer: ReactNode
}

export const Layout = ({header, content, footer}: Props) => {
    const [theme, setTheme] = useState('dark')

    const themeToggle = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <LayoutContainer>
                <div>{header}</div>
                <PageContainer>{content}</PageContainer>
                <div>{footer}</div>
            </LayoutContainer>
        </ThemeProvider>
    )
}