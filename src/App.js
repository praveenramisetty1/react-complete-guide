import React from 'react';
import './App.css';
import Person from './Person/Person';
import { useState } from 'react';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons:  [
        {name: 'Max', age: 29},
        {name: 'Manu', age: 30},
        {name: 'Stephane', age: 35}
      ],
    otherState: 'some other value'
  });

  console.log(personsState);

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        {name: newName, age: 29},
        {name: 'Manu', age: 32},
        {name: 'Stephane', age: 35}
      ]
    })
  };

  const nameChangeHandle = (event) => {
    setPersonsState({
      persons: [
        {name: 'Max', age: 29},
        {name: event.target.value, age: 32},
        {name: 'Stephane', age: 29}
      ]
    })
  };
  
  const [showPersons, setShowPersons] = useState(false);

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  const togglePersonHandle = () => {
    setShowPersons(!showPersons);
  }

  return (
    <div className="App">
      <h1> Hi I'm a React App</h1>
      <p>This is really working!</p>
      <button style={style} onClick={togglePersonHandle}> Toggle Persons </button>
      {
        (showPersons === true) ?
          <div>
            <Person 
              name={personsState.persons[0].name} 
              age={personsState.persons[0].age}/>
            <Person 
              name={personsState.persons[1].name} 
              age={personsState.persons[1].age}
              click={switchNameHandler.bind(this, 'Max!!')}
              changed={nameChangeHandle}> 
                  My Hobbies: Racing
              </Person>
            <Person 
              name={personsState.persons[2].name} 
              age={personsState.persons[2].age}/>
          </div> : null
      }
    </div>

    // React.createElement('div',null, 
    //     React.createElement('h1', {className: 'App'}, 'Hi, I\'m a React App!!!'))
  );
}

export default App;
