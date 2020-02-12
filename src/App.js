import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Person></Person>
        < Person />
      </div>
    );

    /** Line Number 7,8,9 10 gets compiles to line 14 */
    // null is a configuration like classname
   // return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'This is more magic'));
  }
}

export default App;
