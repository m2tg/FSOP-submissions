import { useState,useEffect } from 'react'

import personServices from './services/persons'

import Form from './components/Form'
import Filter from './components/Filter'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')

  useEffect(() => {
    personServices.getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

  const handleFilterName = (event) => {
      setFilterName(event.target.value.toLowerCase())
  }
  
  const getFilteredArray = () =>{
    return persons.filter((person) => JSON.stringify(person.name).toLowerCase().includes(filterName))
  }


  const compareObjs = (obj,newObj) => {
    const obj1Array = obj.map(o => o.name)
    console.log(obj1Array)
    const objContains = obj1Array.indexOf(newObj.name)
    return objContains
  }

  const addNewPerson = (event) => {
    event.preventDefault()
    
    const newPerson = {
      name: newName,
      number: newNumber
    }

    const resultOfCompare = compareObjs(persons, newPerson)
    console.log(resultOfCompare);

    if(resultOfCompare >= 0){
      if (persons[resultOfCompare].number === newNumber)
        alert(`${newName} already exists in the Phonebook`)
      else
        updateNumber(persons[resultOfCompare].id, newPerson)
    }
    else {
      personServices.create(newPerson)
        .then(respPerson => setPersons(persons.concat(respPerson)))
    }
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const deletePerson = (person) => {
    if(window.confirm(`Delete ${person.name} from phonebook?`)) {
      personServices.deleteObject(person.id).then(() => {
        const newPersons = persons.filter(p => p.id !== person.id)
        // console.log(newPersons)
        setPersons(newPersons)
      })
    }
  }

  const updateNumber = (id, newObj) => {
    if(window.confirm(`${newObj.name} already exist in the phonebook, do you want to update the number?`)) {
      personServices.updateNumber(id, newObj)
        .then(respObj => setPersons(persons.map(p => id !== p.id ? p : respObj)))
    }
  }

  

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter stateVar={filterName} stateFunc={handleFilterName}/>
      <h2>Add new person</h2>
      <Form nameStateVar={newName} nameStateFunc={handleNewName} numStateVar={newNumber} numStateFunc={handleNewNumber} addPersonHandler={addNewPerson}/>
      <h2>Numbers</h2>
      {/* {console.log(getFilteredArray())} */}
      {getFilteredArray().map(person => <Persons key={person.id} person={person} deletePerson={() => deletePerson(person)}/>)}
    </div>
  )
}

export default App