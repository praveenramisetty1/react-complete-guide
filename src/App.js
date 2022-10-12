import React from 'react';
import './App.css';
import Person from './Person/Person';
import { useState } from 'react';

const App = props => {
  const [persons, setPersons] =  useState([
          {id: 1, name: 'Max', age: 29},
          {id: 2, name: 'Manu', age: 30},
          {id: 3, name: 'Stephane', age: 35}
        ]);

  const nameChangeHandler = (event, id) => {
    const personIndex = persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...persons[personIndex]
    };
    person.name = event.target.name;
    const persons = [...persons];
    persons[personIndex] = person;

    setPersons(persons);
  };

  const [showPersons, setShowPersons] = useState(false);
  const [displayPersons, setDisplayPersons] = useState(null);

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }
  

  const togglePersonHandle = () => {
    setShowPersons(!showPersons);
    render1(persons);
  }
  const deletePersonHandle = (personIndex) => {
    persons.splice(personIndex, 1);
    render1(persons);
  }

  const render1 = (persons1) => {
    if(showPersons) {
      setDisplayPersons(
        persons1.map((person, index) => {
          return <Person click={() =>  deletePersonHandle(index)} 
                name={person.name} age={person.age} key={person.id}
                changed = {(event) => nameChangeHandler(event, person.id)}/>
        })
      );
    } else {
      setDisplayPersons(null);
    }
  };
  
  return (
    <div className="App">
      <h1> Hi I'm a React App</h1>
      <p>This is really working!</p>
      <button style={style} onClick={togglePersonHandle}> Toggle Persons </button>
      {displayPersons}
    </div>
  );
}

export default App;
