import { useState, useEffect } from 'react'
import Filter from './componenets/Filter'
import Persons from './componenets/Persons'
import PersonForm from './componenets/PersonForm'
import PersonService from './services/Persons'

const App = () => {
  // state
  const [persons, setPersons] = useState([])
  useEffect(() => {
      PersonService.getAll().then(data => setPersons(data))
  }, [])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameQuery, setNameQuery] = useState('')
  // handler
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleNameQueryChange = (event) => {
    console.log(event.target.value)
    setNameQuery(event.target.value)
  }
  const handleNewPerson = (event) => {
    event.preventDefault()
    const existingPerson = persons.find(person => person.name === newName);
    if (existingPerson) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const updatedPerson = { ...existingPerson, number: newNumber };
        PersonService
          .updatePerson(existingPerson.id, updatedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person =>
              person.id !== existingPerson.id ? person : returnedPerson
            ));
            setNewName("");
            setNewNumber("");
          })
      }
      return;
    }
    const newPerson = {
      name: newName,
      number: newNumber,
    }
    PersonService.create(newPerson).then(
      data => {
        setPersons(persons.concat(data))
          setNewName("")
          setNewNumber("")
      }
    )
  }
  const deletePerson = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      PersonService
        .deletePerson(person.id).then(returnedPerson => {
          setPersons(persons.filter(p => p.id != returnedPerson.id))
        })
    }
  }
  // implementation
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter nameQuery={nameQuery} onChange={handleNameQueryChange}></Filter>
      <h2>add a new</h2>
      <PersonForm
        handleNewPerson={handleNewPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      ></PersonForm>
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        nameQeury={nameQuery}
        deletePerson={deletePerson}  
      ></Persons>
    </div>
  )
}

export default App
