import React, { Component } from 'react';

class GameListItem extends Component {
  render() {
    return (
      <div>
        <strong>{this.props.game.title}</strong>: {this.props.game.genre}
      </div>
    )
  }
}

export default GameListItem;
