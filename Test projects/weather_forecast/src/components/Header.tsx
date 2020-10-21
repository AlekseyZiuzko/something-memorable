import React, { FC, useContext } from "react";
import ControlPanel from "./ControlPanel";
import { LanguageContext } from "../App";
import translator from "../utils/translator";

interface Props {
    changeTempUnits(): void;
    changeLang(): void;
    changeBackground(): void;
    searchCity(city: string): void;
}

const Header: FC<Props> = ({
    changeTempUnits,
    changeLang,
    changeBackground,
    searchCity,
}) => {
    const lang = useContext(LanguageContext);
    return (
        <header>
            <h1>{translator(lang.lang, "main-title")}</h1>
            <ControlPanel
                changeTempUnits={changeTempUnits}
                changeLang={changeLang}
                changeBackground={changeBackground}
                searchCity={searchCity}
            />
        </header>
    );
};

export default Header;
