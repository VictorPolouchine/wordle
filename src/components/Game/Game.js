import React, { useState } from 'react';

import {NUM_OF_GUESSES_ALLOWED} from '../../constants'
import GuessInput from '../GuessInput';
import GuessesList from '../GuessesList/GuessesList';
import Banner from '../Banner/Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';


function Game({gameStatus, setGameStatus, answer, setAnswer}) {
  const [guesses, setGuesses] = React.useState([])
  const handleSubmitGuess = (newGuess) => {
    setGuesses([...guesses, newGuess])
  }
  if (guesses.includes(answer) && gameStatus === "") {
    setGameStatus("WIN")
  }
  else if (guesses.length === NUM_OF_GUESSES_ALLOWED && gameStatus === "") {
    setGameStatus("LOSE")
  }
  return (
    <>
      {gameStatus !== "" && <button className="rePlay" onClick={() => { 
        setAnswer("")
        setGuesses([])
      }}>New Game</button>}
      <GuessesList answer={answer} guesses={guesses}/>
      <GuessInput handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus}/>
      {gameStatus !== "" && <Banner status={gameStatus} guesses={guesses} answer={answer}/>}
    </>
  )
}

export default Game;
