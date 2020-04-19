import React from "react";

const Weather = ({ weather }) => {
  const location = weather.location.name;
  const temp = weather.current.temperature;
  const wind_speed = weather.current.wind_speed;
  const wind_degree = weather.current.wind_degree;
  const wind_dir = weather.current.wind_dir;
  const image = weather.current.weather_icons[0];
  return (
    <>
      <h3>Weather in {location}</h3>
      <p>
        <strong>Temperature: </strong>
        {temp} C
      </p>
      <img src={image} alt="weather_image" />
      <p>
        <strong>Wind: </strong>
        {wind_speed} mph {wind_degree} {wind_dir}
      </p>
    </>
  );
};

export default Weather;
