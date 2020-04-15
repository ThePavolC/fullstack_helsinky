import React from "react";

const Filter = ({ filterWord, onChangeFilterHandler }) => {
  return (
    <>
      <label htmlFor="filter">filter shown with: </label>
      <input id="filter" onChange={onChangeFilterHandler} value={filterWord} />
    </>
  );
};

export default Filter;
