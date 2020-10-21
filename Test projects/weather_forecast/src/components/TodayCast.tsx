import React, { useState, useEffect, useContext, FC } from "react";
import axios from "axios";
import DateComponent from "./DateComponent";
import { LanguageContext } from "../App";
import translator from "../utils/translator";

interface Props {
    coordinates: {
        lat: number;
        lng: number;
    };
    tempUnits: string;
}

interface IWeather {
    name: string;
    temperature: number;
    summary: string;
    apparentTemp: number;
    windSpeed: number;
    humidity: number;
    icon: string;
}

const TodayCast: FC<Props> = ({ coordinates, tempUnits }) => {
    const [today] = useState(true);
    const [weather, setWeather] = useState<IWeather>();

    const lang = useContext(LanguageContext);

    useEffect(() => {
        const getWeather = (lat: number, lng: number, tempUnits: string) => {
            axios
                .get(
                    `https://api.weatherapi.com/v1/current.json?key=ad05f76f81cc46a0bf881518201310&q=${lat},${lng}&lang=${lang.lang}`
                )
                .then((res) =>
                    setWeather({
                        name: res.data.location.name,
                        temperature:
                            tempUnits === "C"
                                ? res.data.current.temp_c
                                : res.data.current.temp_f,
                        summary: res.data.current.condition.text,
                        apparentTemp:
                            tempUnits === "C"
                                ? res.data.current.feelslike_c
                                : res.data.current.feelslike_f,
                        windSpeed: res.data.current.wind_kph,
                        humidity: res.data.current.humidity,
                        icon: res.data.current.condition.icon,
                    })
                )
                .catch((err) => console.log(err));
        };
        if (coordinates.lat && coordinates.lng) {
            getWeather(coordinates.lat, coordinates.lng, tempUnits);
        }
    }, [coordinates.lat, coordinates.lng, tempUnits, lang.lang]);

    return (
        <div className="TodayCast">
            <h3>{translator(lang.lang, "currentForecast-title")}</h3>
            <div>
                {translator(lang.lang, "currentForecast-city")}:{" "}
                {weather && weather.name}
            </div>
            <DateComponent today={today} />
            <div>
                {translator(lang.lang, "currentForecast-temperature")}:{" "}
                {weather && weather.temperature} {tempUnits}
            </div>
            <div>
                {translator(lang.lang, "currentForecast-summary")}:{" "}
                {weather && weather.summary}
            </div>
            <div>
                {translator(lang.lang, "currentForecast-apparentTemperature")}:{" "}
                {weather && weather.apparentTemp} {tempUnits}
            </div>
            <div>
                {translator(lang.lang, "currentForecast-windSpeed")}:{" "}
                {weather && weather.windSpeed}{" "}
                {lang.lang === "en" ? "kph" : "км/ч"}
            </div>
            <div>
                {translator(lang.lang, "currentForecast-humidity")}:{" "}
                {weather && weather.humidity}
            </div>
            <img src={weather && weather.icon} alt={"No icon here"} />
        </div>
    );
};

export default TodayCast;
