import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';

import { cities } from '../../data/cities';
import { MarkerLayer } from '../layers/MarkerLayer/MarkerLayer';

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
