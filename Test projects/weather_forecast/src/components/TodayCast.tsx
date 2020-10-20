import React, { useState, useEffect, FC } from "react";
import axios from "axios";
import DateComponent from "./DateComponent";

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

    useEffect(() => {
        const getWeather = (lat: number, lng: number, tempUnits: string) => {
            axios
                .get(
                    `http://api.weatherapi.com/v1/current.json?key=ad05f76f81cc46a0bf881518201310&q=${lat},${lng}`
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
    }, [coordinates.lat, coordinates.lng, tempUnits]);

    return (
        <div className="TodayCast">
            <h3>Current Forecast</h3>
            <div>City: {weather && weather.name}</div>
            <DateComponent today={today} />
            <div>
                Temperature: {weather && weather.temperature} {tempUnits}
            </div>
            <div>Summary: {weather && weather.summary}</div>
            <div>
                Apparent Temperature: {weather && weather.apparentTemp}{" "}
                {tempUnits}
            </div>
            <div>Wind speed: {weather && weather.windSpeed} kph</div>
            <div>Humidity: {weather && weather.humidity}</div>
            <img src={weather && weather.icon} alt={"No icon here"} />
        </div>
    );
};

export default TodayCast;
