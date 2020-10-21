import React, { useState, FC, useContext } from "react";
import { LanguageContext } from "../App";
import translator from "../utils/translator";

interface Props {
    changeTempUnits(): void;
    changeLang(): void;
    changeBackground(): void;
    searchCity(city: string): void;
}

const ControlPanel: FC<Props> = ({
    changeTempUnits,
    changeLang,
    changeBackground,
    searchCity,
}) => {
    const [city, setTitle] = useState({ name: "" });

    const lang = useContext(LanguageContext);

    const onChange = (e: any) => {
        setTitle({ name: e.target.value });
    };

    const handleSearchClick = (e: any) => {
        e.preventDefault();
        if (!city.name) {
            alert(translator(lang.lang, "alert-noCity"));
            return;
        }
        searchCity(city.name);
    };

    const handleChangeBackground = () => {
        changeBackground();
    };

    return (
        <div className="UIControl">
            <form className="search">
                <input
                    type="text"
                    placeholder={translator(lang.lang, "search-placeholder")}
                    onChange={onChange}
                />
                <button onClick={handleSearchClick}>
                    {translator(lang.lang, "button-search")}
                </button>
            </form>

            <button onClick={changeLang}>EN/RU</button>
            <button onClick={changeTempUnits}>°C/°F</button>
            <button onClick={handleChangeBackground}>
                {translator(lang.lang, "button-changeBackground")}
            </button>
        </div>
    );
};

export default ControlPanel;
