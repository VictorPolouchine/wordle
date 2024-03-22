import React, { useState, useEffect } from 'react';
import Game from '../Game';
import Header from '../Header';
import { sample } from '../../utils';
import { WORDSENG, WORDSFR } from '../../data';

function App() {
  const [answer, setAnswer] = React.useState("")
  const [gameStatus, setGameStatus] = React.useState("")
  const [gameLanguage, setGameLanguage] = React.useState("EN")

  const resetGame = (lang) => {
    console.log("LANG", gameLanguage)
    const newAnswer = lang === "EN" ? sample(WORDSENG) : sample(WORDSFR)
    console.log(answer)
    setAnswer(newAnswer)
    setGameStatus("")
    console.info({ newAnswer });
  }

  useEffect(() => {
    if (gameStatus === "") resetGame(gameLanguage)
  }, [gameLanguage, gameStatus])
  
  return (
    <div className="wrapper">
      <Header />
      <select id="langSelect" onChange={(event) => {setGameLanguage(event.target.value)}}>
        <option value="EN">EN</option>
        <option value="FR">FR</option>
      </select>
      <div className="game-wrapper">
        <Game gameStatus={gameStatus} setGameStatus={setGameStatus} answer={answer} setAnswer={setAnswer} />
      </div>
    </div>
  );
}

export default App;
