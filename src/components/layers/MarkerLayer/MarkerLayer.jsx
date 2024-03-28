import React from 'react';
import { Marker, Popup } from 'react-leaflet';

export const MarkerLayer = ({ coordinates }) => {
  return (
    <Marker position={coordinates}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
};
