import React, { FC } from "react";
import TodayCast from "./TodayCast";
import ThreeDayCast from "./ThreeDayCast";
import GeoLocation from "./GeoLocation";

interface Props {
    coordinates: {
        lat: number;
        lng: number;
    };
    tempUnits: string;
}

const MainContent: FC<Props> = ({ coordinates, tempUnits }) => {
    return (
        <main>
            <TodayCast coordinates={coordinates} tempUnits={tempUnits} />
            <ThreeDayCast coordinates={coordinates} tempUnits={tempUnits} />
            <GeoLocation coordinates={coordinates} />
        </main>
    );
};

export default MainContent;
