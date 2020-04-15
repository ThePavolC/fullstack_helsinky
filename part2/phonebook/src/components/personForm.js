import React from "react";

const PersonForm = ({
  onSubmitHandler,
  newName,
  onChangeNameHandler,
  newNumber,
  onChangeNumberHandler,
}) => {
  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="name">name: </label>
        <input id="name" onChange={onChangeNameHandler} value={newName} />
      </div>
      <div>
        <label htmlFor="number">number: </label>
        <input id="number" onChange={onChangeNumberHandler} value={newNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
