import React, { useState, useEffect, FC } from "react";

interface Props {
    today?: boolean;
    date?: string;
}

const getDay = (day: number, short: boolean) => {
    let currentDay;
    switch (day) {
        case 0:
            currentDay = short === true ? "Sun" : "Sunday";
            break;
        case 1:
            currentDay = short === true ? "Mon" : "Monday";
            break;
        case 2:
            currentDay = short === true ? "Tues" : "Tuesday";
            break;
        case 3:
            currentDay = short === true ? "Wed" : "Wednesday";
            break;
        case 4:
            currentDay = short === true ? "Thu" : "Thursday";
            break;
        case 5:
            currentDay = short === true ? "Fri" : "Friday";
            break;
        case 6:
            currentDay = short === true ? "Sat" : "Saturday";
            break;
    }

    return currentDay;
};

const getMonth = (month: number, short: boolean) => {
    let currentMonth, actualMonth;
    short === true ? (actualMonth = month) : (actualMonth = month - 1);

    switch (actualMonth) {
        case 0:
            currentMonth = "January";
            break;
        case 1:
            currentMonth = "February";
            break;
        case 2:
            currentMonth = "March";
            break;
        case 3:
            currentMonth = "April";
            break;
        case 4:
            currentMonth = "May";
            break;
        case 5:
            currentMonth = "June";
            break;
        case 6:
            currentMonth = "July";
            break;
        case 7:
            currentMonth = "August";
            break;
        case 8:
            currentMonth = "September";
            break;
        case 9:
            currentMonth = "October";
            break;
        case 10:
            currentMonth = "November";
            break;
        case 11:
            currentMonth = "December";
            break;
    }

    return currentMonth;
};

const DateComponent: FC<Props> = ({ today, date }) => {
    const [currentTime, setCurrentTime] = useState("");
    const [shortDate, setShortDate] = useState("");
    const [fullDate, setFullDate] = useState("");

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
        let currentDay = getDay(day, true);
        let currentMonth = getMonth(month, true);

        setShortDate(`${currentDay} ${today} ${currentMonth}`);
    };

    const getFullDate = (date: string) => {
        let forecastDate = date.split("-");
        let year = +forecastDate[0];
        let month = +forecastDate[1];
        let today = +forecastDate[2];

        let currentMonth = getMonth(month, false);

        const dateForDay = new Date(`${currentMonth} ${today}, ${year}`);
        let day = dateForDay.getDay();
        let currentDay = getDay(day, false);

        setFullDate(`${currentDay} ${today} ${currentMonth}`);
    };

    useEffect(() => {
        if (date !== undefined) {
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
                    <div>Current Date: {shortDate}</div>
                    <div>Current Time: {currentTime}</div>
                </>
            ) : (
                <>
                    <div>
                        Date: {fullDate} {currentTime}
                    </div>
                </>
            )}
        </>
    );
};

export default DateComponent;
