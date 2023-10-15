import { useState } from 'react'
import Filter from './components/Filter';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';

const App = () => {
  const initialList =[
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }];
    
  const [persons, setPersons] = useState(initialList);
  const [newName, setNewName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [filterList, setFilterList] = useState(initialList);
  
  const addNameHandler = (ev) => {
    ev.preventDefault();
    if (persons.find((person) => person.name === newName) !== undefined){
      alert(`${newName} is already add to phonebook`);
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
      setFilterList(persons.filter(({ name }) => name.toLowerCase().includes(filterValue))); 
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