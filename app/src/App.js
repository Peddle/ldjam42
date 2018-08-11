import React, { Component } from 'react';
import './App.css';
import {socket} from './Sockets.js';
import Player from './Player.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state  = {
      players: [],
      player: {
        x: 50,
        y: 50
      }
    };
  }

  render() {
    return (
      <div className="Game">
        <Player position={this.state.player}/>
      </div>
    );
  }
}

export default App;
