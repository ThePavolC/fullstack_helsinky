import axios from "axios";
import React, { useEffect, useState } from "react";
import Persons from "./components/persons";
import Filter from "./components/filter";
import PersonForm from "./components/personForm";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterWord, setNewFilterWord] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const isNewPersonInPersons = persons.find(
      (person) => person.name === newName
    );
    if (isNewPersonInPersons) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const newPerson = { name: newName, number: newNumber };
    setPersons(persons.concat(newPerson));
    setNewName("");
    setNewNumber("");
  };

  const onChangeNameHandler = (event) => {
    setNewName(event.target.value);
  };
  const onChangeNumberHandler = (event) => {
    setNewNumber(event.target.value);
  };
  const onChangeFilterHandler = (event) => {
    setNewFilterWord(event.target.value);
  };

  const personsToShow = persons.filter((person) => {
    if (filterWord) {
      return person.name.toLowerCase().includes(filterWord.toLowerCase());
    }
    return true;
  });

  const personFormProps = {
    onSubmitHandler,
    newName,
    onChangeNameHandler,
    newNumber,
    onChangeNumberHandler,
  };

  return (
    <>
      <h2>Phonebook</h2>

      <Filter
        filterWord={filterWord}
        onChangeFilterHandler={onChangeFilterHandler}
      />

      <h2>Add a new</h2>
      <PersonForm {...personFormProps} />

      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </>
  );
};

export default App;
