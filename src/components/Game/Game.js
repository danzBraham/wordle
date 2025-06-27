import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

function Game() {
  const [gameStatus, setGameStatus] = React.useState("running"); // running | won | lost
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);

  console.info({ answer });

  const handleAddGuess = (guess) => {
    const nextGuesses = [...guesses, { id: crypto.randomUUID(), value: guess }];
    setGuesses(nextGuesses);

    if (guess.toUpperCase() === answer) {
      setGameStatus("won");
      return;
    }

    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
      return;
    }
  };

  const handleRetry = () => {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setGameStatus("running");
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleAddGuess={handleAddGuess} disabled={gameStatus !== "running"} />
      {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} onRetry={handleRetry} />}
      {gameStatus === "lost" && <LostBanner answer={answer} onRetry={handleRetry} />}
    </>
  );
}

export default Game;
