import { useState } from 'react'
import Filter from './componenets/Filter'
import Persons from './componenets/Persons'
import PersonForm from './componenets/PersonForm'

const App = () => {
  // state
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
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
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
      return
    }
    const newPerson = {
      name: newName,
      number: newNumber,
    }
    setPersons(persons.concat(newPerson))
    setNewName("")
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
      <Persons persons={persons} nameQeury={nameQuery}></Persons>
    </div>
  )
}

export default App
