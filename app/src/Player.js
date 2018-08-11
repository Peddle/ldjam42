import React, { Component } from 'react';

class Player extends Component {
  constructor(props) {
    super(props);
    this.state = props.position;
  }

  render() {
    return (
      <div className="Player" style={this.playerStyle()}>
      </div>
    );
  };

  playerStyle(){
    return {
      position: "absolute",
      backgroundColor: "red",
      width: "100px",
      height: "100px",
      borderRadius: "100%",
      top: this.state.y,
      left: this.state.x,
    };
  }
}



export default Player;
