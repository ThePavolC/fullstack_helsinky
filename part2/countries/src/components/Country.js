import React, { useEffect, useState } from "react";
import axios from "axios";
import Weather from "./Weather";

const WEATHER_API_KEY = process.env.REACT_APP_API_KEY;

const Country = ({ country }) => {
  const [weather, setWeather] = useState();

  useEffect(() => {
    const query = country.name;
    const key = WEATHER_API_KEY;
    const weatherUrl = `http://api.weatherstack.com/current?access_key=${key}&query=${query}`;
    axios.get(weatherUrl).then((resp) => {
      const data = resp.data;
      setWeather(data);
    });
  }, [country.name]);

  return (
    <>
      <h1>{country.name}</h1>
      <div>Capital {country.capital}</div>
      <div>Population {country.population}</div>
      <h2>Languages</h2>
      <ul>
        {country.languages.map((lang) => (
          <li key={lang.name}>{lang.name}</li>
        ))}
      </ul>
      <img src={country.flag} width="100" alt="flag" />
      {weather && <Weather weather={weather} />}
    </>
  );
};

export default Country;
