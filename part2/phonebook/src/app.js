import React, { useEffect, useState } from "react";
import Persons from "./components/persons";
import Filter from "./components/filter";
import PersonForm from "./components/personForm";
import personService from "./services/persons";
import Notification from "./components/notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterWord, setNewFilterWord] = useState("");
  const [notification, setNotification] = useState({ message: null });

  const reloadPersons = () =>
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });

  useEffect(() => {
    reloadPersons();
  }, []);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const isNewPersonInPersons = persons.find(
      (person) => person.name === newName
    );
    if (isNewPersonInPersons) {
      if (
        window.confirm(
          `${newName} is already added to the phonebook, replace the old number with a new one ?`
        )
      ) {
        const existingPerson = persons.find(
          (person) => person.name === newName
        );
        personService
          .update(
            existingPerson.id,
            { ...existingPerson, number: newNumber },
            setNotification
          )
          .then(() => reloadPersons())
          .then(() => {
            setNewName("");
            setNewNumber("");
          });
        return;
      } else {
        return;
      }
    }

    const newPerson = { name: newName, number: newNumber };
    personService.create(newPerson, setNotification).then((returnPerson) => {
      setPersons(persons.concat(returnPerson));
      setNewName("");
      setNewNumber("");
    });
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
  const onDeleteHandler = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .deletePerson(person, setNotification)
        .then(() => reloadPersons());
    }
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

      <Notification notification={notification} />

      <Filter
        filterWord={filterWord}
        onChangeFilterHandler={onChangeFilterHandler}
      />

      <h2>Add a new</h2>
      <PersonForm {...personFormProps} />

      <h2>Numbers</h2>
      <Persons persons={personsToShow} onDeleteHandler={onDeleteHandler} />
    </>
  );
};

export default App;
