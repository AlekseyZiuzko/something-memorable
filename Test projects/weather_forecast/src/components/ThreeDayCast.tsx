import React, { FC, useState, useEffect, useContext } from "react";
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

interface ForecastData {
    date: string;
    avgtemp_c: number;
    avgtemp_f: number;
    icon: string;
}

interface IForecast extends Array<ForecastData> {}

const ThreeDayCast: FC<Props> = ({ coordinates, tempUnits }) => {
    const [forecast, setForecast] = useState<IForecast>();

    const lang = useContext(LanguageContext);

    useEffect(() => {
        const getForecast = (lat: number, lng: number) => {
            axios
                .get(
                    `https://api.weatherapi.com/v1/forecast.json?key=ad05f76f81cc46a0bf881518201310&q=${lat},${lng}&days=3`
                )
                .then((res) =>
                    res.data.forecast.forecastday.map((item: any) => {
                        return {
                            date: item.date,
                            avgtemp_c: item.day.avgtemp_c,
                            avgtemp_f: item.day.avgtemp_f,
                            icon: item.day.condition.icon,
                        };
                    })
                )
                .then((arr) => setForecast(arr))
                .catch((err) => console.log(err));
        };
        if (coordinates.lat && coordinates.lng) {
            getForecast(coordinates.lat, coordinates.lng);
        }
    }, [coordinates.lat, coordinates.lng]);

    return (
        <div className="ThreeDayCast">
            <h3>{translator(lang.lang, "threeDayForecast-title")}</h3>
            {forecast &&
                forecast.map((item: any, index: number) => (
                    <div key={index}>
                        <DateComponent date={item.date} />
                        <div>
                            {translator(
                                lang.lang,
                                "threeDayForecast-averageTemperature"
                            )}
                            :{" "}
                            {tempUnits === "C"
                                ? `${item.avgtemp_c} C`
                                : `${item.avgtemp_f} F`}
                        </div>
                        <img src={item.icon} alt={"No icon here"} />
                    </div>
                ))}
        </div>
    );
};

export default ThreeDayCast;
