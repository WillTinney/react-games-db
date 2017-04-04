import React, { Component } from 'react';

class Searchbar extends Component {
  render() {
    return (
      <div className="searchbar-container">
        <form>
          <label>
            <input className="searchbar form-control" type="text" placeholder="Search Movie Title..." />
          </label>
        </form>
      </div>
    )
  }
}

export default Searchbar;
