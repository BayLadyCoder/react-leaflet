import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { cities } from '../../data/cities';

const MarkerLayer = ({ coordinates }) => {
  return (
    <Marker position={coordinates}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
};

const Map = () => {
  const position = [0, 0];

  return (
    <MapContainer center={position} zoom={1} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {cities.features.map((feature) => {
        const { coordinates } = feature.geometry;
        return (
          <MarkerLayer
            key={coordinates.toString()}
            coordinates={[coordinates[1], coordinates[0]]}
          />
        );
      })}
    </MapContainer>
  );
};

export default Map;
