import React, { useState, FC } from "react";

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

    const onChange = (e: any) => {
        setTitle({ name: e.target.value });
    };

    const handleSearchClick = (e: any) => {
        e.preventDefault();
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
                    placeholder="Enter city name"
                    onChange={onChange}
                />
                <button onClick={handleSearchClick}>Search</button>
            </form>

            <button onClick={changeLang}>EN/RU</button>
            <button onClick={changeTempUnits}>°C/°F</button>
            <button onClick={handleChangeBackground}>Change background</button>
        </div>
    );
};

export default ControlPanel;
