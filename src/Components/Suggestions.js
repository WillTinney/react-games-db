import React, { Component } from 'react';

class Suggestions extends Component {
  handleClick(gameURL) {
    this.props.chooseSuggestion(gameURL)
  }

  render() {
    let suggestions = this.props.suggestions;
    if (!suggestions) {
      return <p className="suggestion">No suggestions</p>; /* null */
    }
    console.log('Suggestions:', this.props.suggestions.map(suggestion => suggestion.name))
    return (
      <div>
        {suggestions.map(suggestion => {
          return <p className="suggestion" onClick={this.handleClick.bind(this, suggestion.api_detail_url)} key={suggestion.id}>{suggestion.name}</p>
        })}
      </div>
    )
  }
}

export default Suggestions;
