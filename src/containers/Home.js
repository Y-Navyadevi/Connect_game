import React from "react";
import "./Home.css";
import rounded from 'react-bootstrap';

export default function Home() {
  return (
    <div className="Home rounded">
      <div className="lander">
        <h1>Instructions to the game</h1>
        <p className="text-muted">Connect Game{"\n"}</p>

        <b>Please read the instructions carefully </b>
        {"\n"}
        <ol className="text-left">
        Connect-Four is a tic-tac-toe-like two-player game in which players alternately place pieces on a vertical board 7 columns across and 6 rows high. ... Both players begin with 21 identical pieces, and the first player to achieve a line of four connected pieces wins the game.
        </ol>
      </div>
    </div>
  );
}
