import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer, Marker } from '@react-google-maps/api';
import pin from '../../assets/images/walls/pin.png';
const containerStyle = {
    width: '100%',
    height: '80vh',
};

const center = {
    lat: 16.0545, // Center of Da Nang
    lng: 108.2022,
};

const mapStyles = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ebe3cd"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#523735"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#f5f1e6"
            }
        ]
    },
];

const Map = ({ locations }) => {
    const [directionsResponse, setDirectionsResponse] = useState(null);

    useEffect(() => {
        if (locations.length > 1) {
            const DirectionsService = new window.google.maps.DirectionsService();
            DirectionsService.route(
                {
                    origin: locations[0],
                    destination: locations[locations.length - 1],
                    waypoints: locations.slice(1, -1).map(location => ({ location })),
                    travelMode: 'DRIVING',
                },
                (result, status) => {
                    if (status === window.google.maps.DirectionsStatus.OK) {
                        setDirectionsResponse(result);
                    } else {
                        console.error(`error fetching directions ${result}`);
                    }
                }
            );
        }
    }, [locations]);

    return (
        <LoadScript googleMapsApiKey="AIzaSyAaP2POkvP_fgB3OsfjVJhuQ310zIrbjdE">
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12} options={{ styles: mapStyles }}>
                {directionsResponse && (
                    <DirectionsRenderer
                        options={{
                            directions: directionsResponse,
                            polylineOptions: {
                                strokeColor: '#ff0000',
                                strokeOpacity: 0.8,
                                strokeWeight: 6,
                            },
                        }}
                    />
                )}
                {locations.map((location, index) => (
                    <Marker
                        key={index}
                        position={location}
                        image={pin}
                    />
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default Map;
