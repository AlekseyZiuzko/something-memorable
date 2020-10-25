import React, { useState, useEffect, useContext, FC } from "react";
import { LanguageContext } from "../App";
import translator from "../utils/translator";

interface Props {
    today?: boolean;
    date?: string;
}

const getDay = (lang: string, day: number, short: boolean): string => {
    let currentDay;
    switch (day) {
        case 0:
            currentDay =
                short === true
                    ? translator(lang, "shortDay-sun")
                    : translator(lang, "fullDay-sun");
            break;
        case 1:
            currentDay =
                short === true
                    ? translator(lang, "shortDay-mon")
                    : translator(lang, "fullDay-mon");
            break;
        case 2:
            currentDay =
                short === true
                    ? translator(lang, "shortDay-tue")
                    : translator(lang, "fullDay-tue");
            break;
        case 3:
            currentDay =
                short === true
                    ? translator(lang, "shortDay-wed")
                    : translator(lang, "fullDay-wed");
            break;
        case 4:
            currentDay =
                short === true
                    ? translator(lang, "shortDay-thu")
                    : translator(lang, "fullDay-thu");
            break;
        case 5:
            currentDay =
                short === true
                    ? translator(lang, "shortDay-fri")
                    : translator(lang, "fullDay-fri");
            break;
        case 6:
            currentDay =
                short === true
                    ? translator(lang, "shortDay-sat")
                    : translator(lang, "fullDay-sat");
            break;
    }

    return currentDay;
};

const getMonth = (lang: string, month: number, short: boolean): string => {
    let currentMonth, actualMonth;
    short === true ? (actualMonth = month) : (actualMonth = month - 1);

    switch (actualMonth) {
        case 0:
            currentMonth = translator(lang, "month-jan");
            break;
        case 1:
            currentMonth = translator(lang, "month-feb");
            break;
        case 2:
            currentMonth = translator(lang, "month-mar");
            break;
        case 3:
            currentMonth = translator(lang, "month-apr");
            break;
        case 4:
            currentMonth = translator(lang, "month-may");
            break;
        case 5:
            currentMonth = translator(lang, "month-june");
            break;
        case 6:
            currentMonth = translator(lang, "month-july");
            break;
        case 7:
            currentMonth = translator(lang, "month-aug");
            break;
        case 8:
            currentMonth = translator(lang, "month-sep");
            break;
        case 9:
            currentMonth = translator(lang, "month-oct");
            break;
        case 10:
            currentMonth = translator(lang, "month-nov");
            break;
        case 11:
            currentMonth = translator(lang, "month-dec");
            break;
    }

    return currentMonth;
};

const DateComponent: FC<Props> = ({ today, date }) => {
    const [currentTime, setCurrentTime] = useState("");
    const [shortDate, setShortDate] = useState("");
    const [fullDate, setFullDate] = useState("");

    const lang = useContext(LanguageContext);

    const getCurrentTime = () => {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        setCurrentTime(
            `${hours}:${minutes < 10 ? "0" + minutes : minutes}:${
                seconds < 10 ? "0" + seconds : seconds
            }`
        );
    };

    const getCurrentDate = () => {
        let date = new Date();
        let month = date.getMonth();
        let today = date.getDate();
        let day = date.getDay();
        let currentDay = getDay(lang.lang, day, true);
        let currentMonth = getMonth(lang.lang, month, true);

        setShortDate(`${currentDay} ${today} ${currentMonth}`);
    };

    const getFullDate = (date: string) => {
        let forecastDate = date.split("-");
        let year = +forecastDate[0];
        let month = +forecastDate[1];
        let today = +forecastDate[2];

        let currentMonth = getMonth(lang.lang, month, false);

        const dateForDay = new Date(`${month} ${today}, ${year}`);
        let day = dateForDay.getDay();
        let currentDay = getDay(lang.lang, day, false);

        setFullDate(`${currentDay} ${today} ${currentMonth}`);
    };

    useEffect(() => {
        if (date) {
            getFullDate(date);
        }
    });

    useEffect(() => {
        getCurrentDate();
    });

    useEffect(() => {
        getCurrentTime();
        const interval = setInterval(() => {
            getCurrentTime();
        }, 1000);
        return () => clearInterval(interval);
    });

    return (
        <>
            {today ? (
                <>
                    <div>
                        {translator(lang.lang, "currentForecast-currentDate")}:{" "}
                        {shortDate}
                    </div>
                    <div>
                        {translator(lang.lang, "currentForecast-currentTime")}:{" "}
                        {currentTime}
                    </div>
                </>
            ) : (
                <>
                    <div>
                        {translator(lang.lang, "threeDayForecast-date")}:{" "}
                        {fullDate} {currentTime}
                    </div>
                </>
            )}
        </>
    );
};

export default DateComponent;
