import React from 'react';

const Weather = ({ temperature }) => {
  return temperature < 15
    ? "It's Cold Outside"
    : temperature >= 15 && temperature <= 25
    ? "It's nice outside"
    : "It's hot outside";
};

export default Weather;
