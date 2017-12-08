import React, { Component } from 'react';

import './App.css';
import record from './record.svg';
import search from './search.svg';

let defaultTextColor = '#fff';
let defaultStyle = {
  color: defaultTextColor
};

class Aggregate extends Component {
  render() {
    return(
      <div style={{...defaultStyle, width: "40%", display: 'inline-block'}}>
        <h2>Number Text</h2>   
      </div>

    );
  }
}

class Filter extends Component {
  render() {
    return(
      <div>
        <img src={search} className="Search" alt="Search"/>
        <input type="text" />
        <span style={defaultStyle}>Filter</span>
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return(
      <div style={{...defaultStyle, width: "25%", display: "inline-block"}}>
        <img />
        <h3>Playlist Name</h3>
        <ul className="Songs">
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={record} className="App-logo" alt="icon" />
        <h1 style={{color: defaultTextColor}}>Playlist</h1>
        <Aggregate />
        <Aggregate />
        <Filter />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
    );
  }
}

export default App;
