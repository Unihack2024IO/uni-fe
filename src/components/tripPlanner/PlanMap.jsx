import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const PlanMap = ({ plan }) => {
    const [map, setMap] = useState(null);
    const mapContainerStyle = {
        height: '400px',
        width: '100%',
    };
    const center = {
        lat: 37.7749,
        lng: -122.4194,
    };
    const zoom = 12;

    const onLoad = map => {
        setMap(map);
    };

    const markers = plan.map((place, index) => (
        <Marker
            key={index}
            position={{ lat: place.lat, lng: place.lng }}
            title={place.name || 'No Name'}
        />
    ));

    return (
        <LoadScript googleMapsApiKey="YOUR_API_KEY">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={zoom}
                onLoad={onLoad}
            >
                {markers}
            </GoogleMap>
        </LoadScript>
    );
};

export default PlanMap;
