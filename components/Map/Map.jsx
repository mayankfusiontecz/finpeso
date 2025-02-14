"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const customIcon = new L.Icon({
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [25, 41], // Default size of the marker
    iconAnchor: [12, 41], // Anchor point of the marker
    popupAnchor: [1, -34], // Popup position relative to the marker
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    shadowSize: [41, 41], // Default size of the shadow
});

export default function Map() {
    const position = [40.730610, -73.935242]; // Default position (latitude, longitude)

    return (
        <div className="h-[500px] w-full">
            <MapContainer
                key={position.join(',')}
                center={position}
                zoom={13}
                scrollWheelZoom={false}
                className="h-full w-full"
            >
                {/* Add OpenStreetMap Tile Layer */}
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* Add a Marker */}
                <Marker position={position} icon={customIcon}>
                    <Popup>
                        A pretty popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
