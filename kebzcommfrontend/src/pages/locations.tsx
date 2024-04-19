import React from 'react';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 38.9072,  // Approximate center of US (Washington DC for context)
  lng: -77.0369
};

// Example locations: Using general McDonald's locations
const locations = [
  { lat: 34.0522, lng: -118.2437, label: "LA" },  // Los Angeles, CA
  { lat: 40.7128, lng: -74.0060, label: "NY" },  // New York, NY
  { lat: 41.8781, lng: -87.6298, label: "CH" }   // Chicago, IL
];

const LocationsPage = () => {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyB-jJLIhxakHRe8mhr_4fRrxxJ0gkvGCvs"  // Replace with your actual Google Maps API key
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}  // A zoom level of 5 shows a good part of the US where these cities are visible
      >
        {locations.map((location, index) => (
          <MarkerF key={index} position={location} label={location.label} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default LocationsPage;