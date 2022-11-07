export interface ThemeProps {
    backGroundColor: string;
    fontColor: string;
    hoverColors:string
    weatheredColor:string
}

export type GlobalThemeProps = {
    theme: ThemeProps;
};
