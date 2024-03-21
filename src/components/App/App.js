import React, { useState, useEffect } from 'react';
import Game from '../Game';
import Header from '../Header';
import { sample } from '../../utils';
import { WORDS } from '../../data';

function App() {
  const [answer, setAnswer] = React.useState("")
  const [gameStatus, setGameStatus] = React.useState("")
  
  if (answer === "") {
    const newAnswer = sample(WORDS)
    setAnswer(newAnswer)
    setGameStatus("")
    console.info({ newAnswer });
  }
  return (
    <div className="wrapper">
      <Header />

      <div className="game-wrapper">
        <Game gameStatus={gameStatus} setGameStatus={setGameStatus} answer={answer} setAnswer={setAnswer} />
      </div>
    </div>
  );
}

export default App;
