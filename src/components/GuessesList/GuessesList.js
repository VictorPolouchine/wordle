import React from 'react';
import Guess from '../Guess/Guess';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import { range } from '../../utils';

function GuessesList({ guesses, answer }) {
  const numPlaceholders = NUM_OF_GUESSES_ALLOWED - guesses.length;
  return (
    <div className='guess-results'>
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} answer={answer} guess={guesses[num]} />
      ))}
    </div>
  );
}

export default GuessesList;
