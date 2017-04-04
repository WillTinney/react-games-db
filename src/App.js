import React, { Component } from 'react';
import $ from 'jquery';
import Games from './Components/Games';
// import logo from './logo.svg';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mygames: [],
      games: []
    }
  }

  getGames() {
    $.ajax({
      url: 'https://www.giantbomb.com/api/games/?api_key=267b029fc269a75599b15df6ea60ac9d974fb9ed&format=json',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({games: data}, function(){
          console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, error) {
        console.log(error);
      }
    })
  }

  myGames() {
    this.setState({mygames: [
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
    ]})
  }

  componentWillMount() {
    this.myGames();
    this.getGames();
  }

  componentDidMount() {
    this.getGames();
  }

  render() {
    return (
      <div>
        <h1>Games List</h1>
        <Games games={this.state.mygames} />
      </div>
    );
  }
}

export default App;
