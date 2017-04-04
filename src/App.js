import React, { Component } from 'react';
import Games from './Components/Games';
// import logo from './logo.svg';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      games: [
        {
          title: 'Witcher 3',
          genre: 'RPG'
        },
        {
          title: 'Pac-man',
          genre: 'Arcade'
        },
        {
          title: 'FIFA',
          genre: 'Sports'
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Games List</h1>
        <Games games={this.state.games} />
      </div>
    );
  }
}

export default App;
