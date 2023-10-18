import { useEffect, useState } from 'react'
import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import axios from 'axios';

const App = () => {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [filterList, setFilterList] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:3001/persons')
        .then(response => {
          setPersons(response.data);
          setFilterList(response.data);
        })
  }, []);
  
  const addNameHandler = (ev) => {
    ev.preventDefault();
    if (persons.find((person) => person.name === newName) !== undefined){
      alert(`${newName} is already added to phonebook`);
      setNewName('');
      setNumber('');
      return;
    }
    const newPersons = [...persons, {name: newName, number: number, id: persons.length + 1}];
    setPersons(newPersons);
    setFilterList(newPersons)
  };

  const handlerOnChangeNameInput = (ev) => {
    setNewName(ev.target.value);
  };

  const handlerOnChangeNumberInput = (ev) => {
    setNumber(ev.target.value);
  };
  
  
  const filterChangeHandler = (ev) => {
    const filterValue = ev.target.value;
    setFilter(filterValue);
    if (filterValue !== null || filterValue !== '') {
      setFilterList(persons.filter(({ name }) => name.toLowerCase().includes(filterValue.toLowerCase()))); 
    } else {
      setFilterList(persons);
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter onChange={filterChangeHandler} filter={filter}/>
      <h2>Numbers</h2>
      <PersonForm addNameHandler={addNameHandler}  newName={newName} handlerOnChangeNameInput={handlerOnChangeNameInput}
                  number={number} handlerOnChangeNumberInput={handlerOnChangeNumberInput} />
      <Persons personsArray={filterList} />
    </div>
  )
};

export default App;