import React from "react";
import Country from "./Country";
import SearchResultItem from "./SearchResultItem";

const SearchResult = ({ countries, selectCountryHandler }) => {
  const isTooManyResults = countries.length > 10;
  const isThereResult = countries.length === 1;
  let result;

  if (countries.length === 0) {
    return null;
  }

  if (isTooManyResults) {
    return <p>Too many matches, specify another filter.</p>;
  }

  if (isThereResult) {
    const country = countries[0];
    return <Country country={country} />;
  }

  result = countries.map((country) => {
    return (
      <SearchResultItem
        key={country.name}
        country={country}
        callBackHandler={selectCountryHandler}
      />
    );
  });

  return <>{result}</>;
};

export default SearchResult;
