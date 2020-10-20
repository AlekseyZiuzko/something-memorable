import React, { FC } from "react";
import ControlPanel from "./ControlPanel";

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
    return (
        <header>
            <h1>Weather Forecast</h1>
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
