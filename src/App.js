import React, { Component } from 'react';
import $ from 'jquery';
import Searchbar from './Components/Searchbar';
import Game from './Components/Game';
import FaGithub from 'react-icons/lib/fa/github';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      response: undefined,
      games: [],
      gameURL: 'https://www.giantbomb.com/api/game/3030-12572/'
    }
  }

  getAllGames() {
    $.ajax({
      url: 'https://www.giantbomb.com/api/games/?api_key=267b029fc269a75599b15df6ea60ac9d974fb9ed&format=json',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({games: data})
      }.bind(this),
      error: function(xhr, status, error) {
        console.log(error);
      }
    })
  }

  getGame(gameURL) {
    $.ajax({
      url: gameURL + '?api_key=267b029fc269a75599b15df6ea60ac9d974fb9ed&format=json',
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log('API success!');
        this.setState({
          response: 'OK',
          gameURL: data.results.api_detail_url,
          title: data.results.name,
          image: data.results.image,
          deck: data.results.deck,
          description: data.results.description, // if !(deck) then description
          genres: data.results.genres,
          platforms: data.results.platforms,
          releaseDate: data.results.original_release_date,
          developers: data.results.developers, // if !(publishers) then developers
          publishers: data.results.publishers,
          dlcs: data.results.dlcs,
          similarGames: data.results.similar_games
        })
      }.bind(this),
      error: function(xhr, status, error) {
        console.log(error);
      }
    })
  }

  componentWillMount() {
    this.getGame(this.state.gameURL);
    console.log('Will Mount')
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="header">
            <div>
              <h1>Video Game Db</h1>
            </div>
            <Searchbar searchGame={this.getGame.bind(this)}/>
          </div>
          <div className="card">
            <Game game={this.state} />
          </div>
          <div className="footer">
            <a href="" target="blank"><FaGithub id="github-icon"/>Developed by Will Tinney using ReactJS</a>
            <br/>
            <div className="db-logo">
              <a href="https://www.giantbomb.com/api/" target="blank">
                <p>Powered by</p>
                <img src="https://static.giantbomb.com/uploads/original/0/8991/2217314-giantbomblogo_vector2.png" alt="giant-bomb" height="105" width="110" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
