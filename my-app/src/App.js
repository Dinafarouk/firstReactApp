import React, { Component } from 'react';
import './App.css';
import Test from './btest';
// import Ninjas from './Ninjas';

class App extends Component {
  state = {
    ninjas: [
      { name: 'dina', age: '30', belt: 'black', id: 1 },
      { name: 'dodo', age: '20', belt: 'black', id: 2 },
      { name: 'donna', age: '25', belt: 'black', id: 3 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>my first react app</h1>
        <Test ninjas={[1,1,1,1,1]}/>

        {/* <Ninjas name="dina" age="25" belt="black"/>
  <Ninjas name="dodo" age="30" belt="green"/> */}
      </div>
    );
    {/* <header className="App-header"> }
        { <img src={logo} className="App-logo" alt="logo" /> }
        { <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    // </div>
    // );
  }
}

export default App;
