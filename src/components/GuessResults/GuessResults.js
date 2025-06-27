import React from "react";

import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function GuessResults({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={guesses[num]?.id || num} word={checkGuess(guesses[num]?.value, answer) || ""} />
      ))}
    </div>
  );
}

export default GuessResults;
