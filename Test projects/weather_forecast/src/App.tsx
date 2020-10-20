import React, { useState, useEffect, FC } from "react";
import Header from "../src/components/Header";
import MainContent from "./components/MainContent";
import axios from "axios";
import "./App.css";

interface ICoordinates {
    lat: number;
    lng: number;
}

const App: FC = () => {
    const [lang, setLang] = useState("en");
    const [tempUnits, setTempUnits] = useState("C");
    const [coordinates, setCoordinates] = useState<ICoordinates>({
        lat: 0,
        lng: 0,
    });
    const [background, setBackground] = useState({ backgroundImage: "" });

    // useEffect(() => {
    //     // localStorage.setItem("lang", JSON.stringify(lang));
    //     const currentLang = JSON.parse(localStorage.getItem("lang")!);
    //     if (currentLang === "en") {
    //         setLang("en");
    //     } else if (currentLang === "ru") {
    //         setLang("ru");
    //     }
    //     localStorage.setItem("lang", JSON.stringify(lang));
    // }, [lang]);

    // useEffect(() => {
    //     localStorage.setItem("tempUnits", JSON.stringify(tempUnits));
    //     const currentTempUnits = JSON.parse(localStorage.getItem("tempUnits")!);
    //     if (currentTempUnits) {
    //         setTempUnits(currentTempUnits);
    //     } else {
    //         setTempUnits("C");
    //     }
    // }, [tempUnits]);

    useEffect(() => {
        if (coordinates.lat === 0 && coordinates.lng === 0) {
            axios
                .get("https://ipinfo.io/json?token=4bc312406fe3c2")
                .then((res) => {
                    const location = res.data.loc.split(",");
                    setCoordinates({ lat: +location[0], lng: +location[1] });
                });
        }
    }, [coordinates.lat, coordinates.lng]);

    useEffect(() => {
        getNewBackground();
        changeBackground(background.backgroundImage);
    }, [background.backgroundImage]);

    const changeLang = () => {
        if (lang === "en") {
            setLang("ru");
        } else {
            setLang("en");
        }
        // localStorage.setItem("lang", JSON.stringify(lang));
    };

    const changeTempUnits = () => {
        if (tempUnits === "C") {
            setTempUnits("F");
        } else {
            setTempUnits("C");
        }
    };

    const getNewBackground = () => {
        axios
            .get(
                "https://api.unsplash.com/photos/random?client_id=7mibf9ZNJoaQNH9_1TUa715moxoSPCIZwwln6uRrNFU"
            )
            .then((res) => res.data.urls.regular)
            .then((link) => setBackground({ backgroundImage: `url(${link})` }))
            .catch((err) => console.log(err));
    };

    const changeBackground = (backgroundImage: string) => {
        return (appStyle = { ...appStyle, backgroundImage });
    };

    const searchCity = (city: string): void => {
        axios
            .get(
                `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=8daf22b9660d4887ac538fd433f4e70b&no_annotations=1`
            )
            .then((res) => res.data.results[0].geometry)
            .then((geometry) =>
                setCoordinates({
                    lat: +geometry.lat.toFixed(4),
                    lng: +geometry.lng.toFixed(4),
                })
            )
            .catch((err) => console.log(err));
    };

    return (
        <div className="App" style={appStyle}>
            <Header
                changeTempUnits={changeTempUnits}
                changeLang={changeLang}
                changeBackground={getNewBackground}
                searchCity={searchCity}
            />
            <MainContent coordinates={coordinates} tempUnits={tempUnits} />
        </div>
    );
};

let appStyle = {
    backgroundImage: "none",
};

export default App;
