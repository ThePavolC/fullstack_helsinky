import React from "react";

const SearchResultItem = ({ country, callBackHandler }) => {
  const selectCountryHandler = () => {
    callBackHandler(country);
  };

  return (
    <div key={country.name}>
      <span>{country.name}</span>
      <button onClick={selectCountryHandler}>show</button>
    </div>
  );
};

export default SearchResultItem;
