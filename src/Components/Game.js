import React, { Component } from 'react';

class Game extends Component {
  orderDate(date) {
    date.slice(0,9)
  }
  render() {

    console.log('before if');
    if (this.props.game.response === undefined) { // (!this.props.game.response)
      return <h1>API has not loaded yet</h1>
      // Put in spinner
    }
    console.log('after if');
    console.log(this.props.game.image)

    return (
      <div>
        <div className="col-xs-12 col-lg-6 game-image">
          <img src={this.props.game.image.medium_url} alt="game" />
        </div>
        <div className="col-xs-12 col-lg-6">
          <h1>{this.props.game.title}</h1>
          <p>{this.props.game.deck ? this.props.game.deck : this.props.game.description}</p>
          <h2>Genres</h2>
          <h3>[{this.props.game.genres ? this.props.game.genres.map((genre) => genre.name).join(', ') : 'N/A'}]</h3>
          <h2>Platforms</h2>
          <h3>[{this.props.game.platforms ? this.props.game.platforms.map((platform) => platform.name).join(', ') : 'N/A'}]</h3>
          <br />
          <div className="card-details">
            <div className="col-xs-12 col-sm-6">
              <h3>Release Date:</h3>
              <h4>{this.props.game.releaseDate.slice(0,10)}</h4>
              <h3>DLCs:</h3>
              <h4>{this.props.game.dlcs ? this.props.game.dlcs.map((dlc) => dlc.name).join(', ') : 'No DLCs'}</h4>
            </div>
            <div className="col-xs-12 col-sm-6">
              <h3>Publisher:</h3>
              <h4>{this.props.game.publishers ? this.props.game.publishers.map((publisher) => publisher.name).join(', ') : 'N/A'}</h4>
              <h3>Similar Games:</h3>
              <h4>{this.props.game.similarGames ? this.props.game.similarGames.slice(0,5).map((similarGame) => similarGame.name).join(', ') : 'N/A'}</h4>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Game.propType = {
  game: React.PropTypes.object
}

export default Game;
