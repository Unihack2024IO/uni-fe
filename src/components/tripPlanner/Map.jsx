import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, DirectionsRenderer, Marker } from "@react-google-maps/api";
import pin from '../../assets/images/walls/pin.png';

const containerStyle = {
    width: '100%',
    height: '80vh',
};

const center = {
    lat: 16.0545, // Center of Da Nang
    lng: 108.2022,
};

const MapComponent = (props) => {
    const [directionsState, setDirectionsState] = useState(null);

    const { directionsSetter, distanceSetter, origin, destination, locations } = props;
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyDGNb0-8POcbl325cnA4j1ChPXQKX9ggv4',
    });

    useEffect(() => {
        if (!window.google || !isLoaded) {
            return;
        }

        const google = window.google;

        const DirectionsService = new google.maps.DirectionsService();
        const MatrixService = new google.maps.DistanceMatrixService();

        console.log('locations: ', locations);

        DirectionsService.route(
            {
                origin,
                destination,
                travelMode: google.maps.TravelMode.DRIVING,
                unitSystem: google.maps.UnitSystem.METRIC,
            },
            (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    setDirectionsState(result);
                    // directionsSetter(result);
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            }
        );

        MatrixService.getDistanceMatrix(
            {
                origins: [origin],
                destinations: [destination],
                travelMode: google.maps.TravelMode.DRIVING,
                unitSystem: google.maps.UnitSystem.METRIC,
            },
            (result, status) => {
                if (status === google.maps.DistanceMatrixStatus.OK) {
                    // distanceSetter(result);
                }
            }
        );
    }, [origin, destination, isLoaded]);

    if (!isLoaded) {
        return "Loading...";
    }

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}

        >
            {directionsState && (
                <DirectionsRenderer options={{ directions: directionsState }} />
            )}

            {locations.map((location, index) => (
                <Marker
                    position={location}
                />
            ))}
        </GoogleMap>
    ) : <></>
};

export default MapComponent;
