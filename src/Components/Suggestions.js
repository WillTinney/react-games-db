import React, { Component } from 'react';

class Suggestions extends Component {
  handleClick(gameURL) {
    this.props.chooseSuggestion(gameURL)
  }

  render() {
    let suggestions = this.props.suggestions;
    if (!suggestions) {
      return null;
    }
    return (
      <div className="suggestion-container">
        {suggestions.map(suggestion => {
          return <p className="suggestion" onClick={this.handleClick.bind(this, suggestion.api_detail_url)} key={suggestion.id}>{suggestion.name}</p>
        })}
      </div>
    )
  }
}

export default Suggestions;
