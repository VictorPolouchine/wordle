import React from 'react';
import { range } from '../../utils';
import {checkGuess} from "../../game-helpers"

function Guess({guess, answer}) {
  const lettersStatuses = checkGuess(guess, answer) || undefined
  console.log(lettersStatuses)
  return (
    <p className='guess'>
      {range(5).map((num) => (
        <span key={num} className={`cell ${lettersStatuses?.[num]?.status ?? ""}`}>{guess ? guess[num] : undefined}</span>  
      ))}
    </p>
  );
}

export default Guess;
