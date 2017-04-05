import React, { Component } from 'react';
import FaSearch from 'react-icons/lib/fa/search';

class Searchbar extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }
  render() {
    return (
      <div className="searchbar-container">
        <FaSearch id="search-icon" />
        <form>
          <label>
            <input className="searchbar form-control" type="text" placeholder="Search Game Title..." />
          </label>
        </form>
      </div>
    )
  }
}

export default Searchbar;
