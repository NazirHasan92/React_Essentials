import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {

  state = {
    persons: [
      {name: 'Nazir', age: 27},
      {name: 'Jun', age: 26}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
      </div>
    );

    /** Line Number 7,8,9 10 gets compiles to line 14 */
    // null is a configuration like classname
   // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'This is more magic'));
  }
}

export default App;
