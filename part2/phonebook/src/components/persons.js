import React from "react";

const Persons = ({ persons, onDeleteHandler }) => {
  return (
    <>
      {persons.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
          <button onClick={() => onDeleteHandler(person)}>delete</button>
        </div>
      ))}
    </>
  );
};

export default Persons;
