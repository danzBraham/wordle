import React from "react";

function GuessInput({ handleAddGuess, disabled }) {
  const [guess, setGuess] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddGuess(guess);
    setGuess("");
  };

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={disabled}
        autoFocus={true}
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
        pattern="[A-Za-z]{5}"
        title="5 letters word"
      />
    </form>
  );
}

export default GuessInput;
