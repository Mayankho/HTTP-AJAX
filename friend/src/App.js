import React, { Component } from 'react';
import './App.css';
import ServerData from './ServerData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <ServerData />
          
        </header>
      </div>
    );
  }
}

export default App;
