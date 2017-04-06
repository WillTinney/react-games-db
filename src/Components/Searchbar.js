import React, { Component } from 'react';
import Suggestions from './Suggestions';
import $ from 'jquery';
import FaSearch from 'react-icons/lib/fa/search';

class Searchbar extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      suggestions: ''
    }
  }

  searchGames(search) {
    $.ajax({
      url: 'https://www.giantbomb.com/api/search/?api_key=267b029fc269a75599b15df6ea60ac9d974fb9ed&format=json&limit=3&query="' + search + '"',
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log('Seached!');
        this.setState({suggestions: data.results.splice(0,3)})
      }.bind(this),
      error: function(xhr, status, error) {
        console.log(error);
      }
    })
  }

  handleChange(e) {
    this.setState({search: e.target.value})
    this.searchGames(e.target.value)
  }

  chooseSuggestion(gameURL) {
    this.props.searchGame(gameURL)
    this.setState({search: '', suggestions: ''})
    this.refs.search.value = ''
  }

  render() {
    return (
      <div className="searchbar-container">
        <FaSearch id="search-icon" />
        <form>
          <label>
            <input ref="search" onChange={this.handleChange.bind(this)} className="searchbar form-control" type="text" placeholder="Search Game Title..." />
          </label>
        </form>
        <Suggestions chooseSuggestion={this.chooseSuggestion.bind(this)} suggestions={this.state.suggestions} />
      </div>
    )
  }
}

export default Searchbar;
