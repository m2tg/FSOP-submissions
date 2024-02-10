import { useState } from 'react'

import Form from './components/Form'
import Filter from './components/Filter'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '1234567890'},
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  const handleFilterName = (event) => {
      setFilterName(event.target.value.toLowerCase())
  }
  
  const getFilteredArray = () =>{
    return persons.filter((person) => JSON.stringify(person.name).toLowerCase().includes(filterName))
  }

  const compareObjs = (obj1,name) => {
    const names = obj1.map((obj) => obj.name)
    console.log(names)
    return names.includes(newName)
  }

  const addNewPerson = (event) => {
    event.preventDefault()
    
    const newPerson = {
      name: newName,
      number: newNumber
    }
    if(compareObjs(persons, newName)){
      alert(`${newName} already exists in the Phonebook`)
    }
    else setPersons(persons.concat(newPerson))
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter stateVar={filterName} stateFunc={handleFilterName}/>
      <h2>Add new person</h2>
      <Form nameStateVar={newName} nameStateFunc={handleNewName} numStateVar={newNumber} numStateFunc={handleNewNumber} addPersonHandler={addNewPerson}/>
      <h2>Numbers</h2>
      {/* {console.log(getFilteredArray())} */}
      <Persons filterdArray={getFilteredArray()} />
    </div>
  )
}

export default App