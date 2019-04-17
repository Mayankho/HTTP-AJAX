import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Friends from "./Friends/friends";

class App extends Component {
  constructor (){
    super();
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: ''
    }
  }

  componentDidMount (){
    axios.get('http://localhost:5000/friends')
    .then(response => this.setState({friends: response.data}))
    .catch(err => console.log(err, 'Doesnt work!'))
    
  }
  render() {
    return (
      <div className="App">

      <Friends friends={this.state.friends}/>
      <input type= "text"
      placeholder='name'
      name="name"
      value = {this.state.name}
      onchange= {this.handleTextInput}
      />
      <input type = 'text'
      placeholder= 'age'
      name="age"
      value = {this.state.age}
      onChange={this.handleTextInput}
      />
      <input type = 'text'
      placeholder='email'
      name='email'
      value={this.state.email}
      onChange={this.handleTextInput}
      />
      <button onClick={this.saveNoteData}>Save Friend</button>
      </div>
    );
  }
}

export default App;
