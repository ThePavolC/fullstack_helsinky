import React from "react";

const Search = ({ inputHandler }) => (
  <form onSubmit={() => {}}>
    <label htmlFor="countries">
      Find Countries
      <input type="text" name="countries" onChange={inputHandler} />
    </label>
  </form>
);

export default Search;
