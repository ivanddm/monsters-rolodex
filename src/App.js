// import React, { Component } from 'react';
import React from 'react';
import './App.css';

// class App extends Component {
// or
class App extends React.Component {
  constructor() {
    super(); // calls Reac.Component's constructor
    this.state = {
      monsters: [
        { name: 'Frankenstein', id: 'asr01' },
        { name: 'Dracula', id: 'asc23' },
        { name: 'Zombie', id: 'art15' }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
