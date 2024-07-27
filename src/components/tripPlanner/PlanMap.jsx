import React from 'react';
import Map from './Map';

const PlanMap = () => {
    const locations = [
        { lat: 16.047079, lng: 108.206230 }, // Dragon Bridge
        { lat: 16.047307, lng: 108.223093 }, // My Khe Beach
        { lat: 16.075406, lng: 108.235450 }, // Han Market
        { lat: 16.075778, lng: 108.250128 }, // Son Tra Mountain (Monkey Mountain)
        { lat: 16.056051, lng: 108.208944 }, // Marble Mountains
        { lat: 16.050813, lng: 108.208727 },
    ];

    const origin = new window.google.maps.LatLng(16.047079, 108.206230);
    const destination = new window.google.maps.LatLng(16.056051, 108.208944);

    return (
        <div>
            <h1>Da Nang Attractions</h1>
            <Map locations={locations} origin={origin} destination={destination} />
        </div>
    );
};

export default PlanMap;
