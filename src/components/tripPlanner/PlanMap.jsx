import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const PlanMap = ({ plan }) => {
    const [map, setMap] = useState(null);
    const mapContainerStyle = {
        height: '80vh',
        width: '45vw',
    };

    // Calculate center based on the plan locations
    const calculateCenter = (locations) => {
        if (locations.length === 0) return { lat: 37.7749, lng: -122.4194 }; // Default to San Francisco if no locations

        const latitudes = locations.map(location => location.lat);
        const longitudes = locations.map(location => location.lng);

        const avgLat = latitudes.reduce((a, b) => a + b, 0) / latitudes.length;
        const avgLng = longitudes.reduce((a, b) => a + b, 0) / longitudes.length;

        return { lat: avgLat, lng: avgLng };
    };

    const center = calculateCenter(plan);
    const zoom = plan.length > 0 ? 12 : 2; // Zoom out if no places are provided

    const onLoad = (mapInstance) => {
        setMap(mapInstance);
    };

    const markers = plan.map((place, index) => (
        <Marker
            key={index}
            position={{ lat: place.lat, lng: place.lng }}
            title={place.name || 'No Name'}
        />
    ));

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
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
