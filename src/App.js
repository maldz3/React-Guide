import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
// import Radium, {StyleRoot} from 'radium';

class App extends Component {
  state = {
    persons: [
      { id: 'one', name: "Maliha", age: "37" },
      { id: 'two', name: "Sohail", age: "45" },
      { id: 'three', name: "Aniya", age: "13" }
    ],
    showPersons: false
  }

  switchNameHandler = () => {
    // console.log('Was clicked');
    this.setState({
      persons: [
        { name: "Mallu", age: "37" },
        { name: "Pookie", age: "45" },
        { name: "Anu", age: "13" }
      ]
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style= {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }

    let persons = null;

    if( this.state.showPersons ){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );

      style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <=1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1>Maliha's React App</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button
            style={style}
            onClick={this.togglePersonHandler}>Toggle Persons</button>
          {persons}
        </div>
    );
  }
}

export default App;
