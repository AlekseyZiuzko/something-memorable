import React, { FC, useState, useEffect, useRef, useContext } from "react";
import mapboxgl from "mapbox-gl";
import { LanguageContext } from "../App";
import translator from "../utils/translator";

mapboxgl.accessToken =
    "pk.eyJ1IjoiYmFtYnVjaGEiLCJhIjoiY2tnN3Bjd2Y5MDllcDJxbnZ2azVpeHg1ayJ9.KOEEQI1Zz3BLR79fAXpVgA";

interface Props {
    coordinates: {
        lat: number;
        lng: number;
    };
}

interface IMapCoordinates {
    lng: number;
    lat: number;
    zoom: number;
}

const GeoLocation: FC<Props> = ({ coordinates }) => {
    const [map, setMap] = useState<mapboxgl.Map>();
    const [marker, setMarker] = useState<mapboxgl.Marker>();
    const [mapCoordinates, setMapCoordinates] = useState<IMapCoordinates>({
        lng: 0,
        lat: 0,
        zoom: 10,
    });

    const lang = useContext(LanguageContext);

    const mapContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMapCoordinates({
            lng: coordinates.lng,
            lat: coordinates.lat,
            zoom: 10,
        });
        if (map !== undefined) {
            map.setCenter([coordinates.lng, coordinates.lat]);
            marker?.setLngLat([coordinates.lng, coordinates.lat]);
        }
    }, [map, marker, coordinates.lng, coordinates.lat]);

    useEffect(() => {
        const attachMap = (
            setMap: any,
            mapContainerRef: React.RefObject<HTMLDivElement>
        ) => {
            if (!mapContainerRef.current) {
                return;
            }

            const map = new mapboxgl.Map({
                container: mapContainerRef.current || "",

                style: "mapbox://styles/mapbox/streets-v11",
                center: [mapCoordinates.lng, mapCoordinates.lat],
                zoom: mapCoordinates.zoom,
            });

            map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

            map.on("move", () => {
                setMapCoordinates({
                    lng: +map.getCenter().lng.toFixed(4),
                    lat: +map.getCenter().lat.toFixed(4),
                    zoom: +map.getZoom().toFixed(2),
                });
            });

            const marker = new mapboxgl.Marker()
                .setLngLat([mapCoordinates.lng, mapCoordinates.lat])
                .addTo(map);

            setMap(map);
            setMarker(marker);
        };
        if (mapCoordinates.lng !== 0 && mapCoordinates.lat !== 0) {
            !map && attachMap(setMap, mapContainerRef);
        }
    }, [
        map,
        marker,
        mapCoordinates.lng,
        mapCoordinates.lat,
        mapCoordinates.zoom,
    ]);

    return (
        <>
            <h3>{translator(lang.lang, "geoLocation-title")}</h3>
            <div className="map-container">
                <div className="mapSidebar">
                    <div>
                        {translator(lang.lang, "geoLocation-latitude")}:{" "}
                        {mapCoordinates.lat}°
                    </div>
                    <div>
                        {translator(lang.lang, "geoLocation-longitude")}:{" "}
                        {mapCoordinates.lng}°
                    </div>
                    <div>
                        {translator(lang.lang, "geoLocation-zoom")}:{" "}
                        {mapCoordinates.zoom}
                    </div>
                </div>
                <div className="map" ref={mapContainerRef} />
            </div>
        </>
    );
};

export default GeoLocation;
