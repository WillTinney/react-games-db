import React, { Component } from 'react';
import GameListItem from './GameListItem';

class Games extends Component {
  render() {
    let gameListItems;
    if(this.props.games) {
      gameListItems = this.props.games.map(game => {
        return (
          <GameListItem key={game.title} game={game} />
        )
      });
    }
    return (
      <div>
        {gameListItems}
      </div>
    )
  }
}

export default Games;
