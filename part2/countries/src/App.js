import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./components/Search";
import SearchResult from "./components/SearchResult";

function App() {
  const [countries, setCountries] = useState([]);
  const [countriesToShow, setCountriesToShow] = useState([]);

  const inputHandler = (event) => {
    const inputString = event.target.value;

    const _countriesToShow = countries.filter((country) =>
      country.name.toLowerCase().includes(inputString.toLowerCase())
    );
    setCountriesToShow(_countriesToShow);
  };

  useEffect(() => {
    const prodUrl = "https://restcountries.eu/rest/v2/all";
    // const devUrl = "http://localhost:3001/countries";
    axios.get(prodUrl).then((resp) => {
      const data = resp.data;
      setCountries(data);
    });
  }, []);

  const selectCountryHandler = (selectedCountry) => {
    const _selectedCountriesToShow = countries.filter(
      (country) => country.name === selectedCountry.name
    );
    setCountriesToShow(_selectedCountriesToShow);
  };

  return (
    <div className="App">
      <Search inputHandler={inputHandler} />
      <SearchResult
        countries={countriesToShow}
        selectCountryHandler={selectCountryHandler}
      />
    </div>
  );
}

export default App;
