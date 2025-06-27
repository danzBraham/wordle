export function checkGuess(guess, answer) {
  if (!guess) return null;

  const SOLVED = "✓";
  const guessChars = guess.toUpperCase().split("");
  const answerChars = [...answer.split("")]; // shallow copy
  const result = new Array(guessChars.length);

  // Step 1: Mark correct positions
  guessChars.forEach((char, i) => {
    if (char === answerChars[i]) {
      result[i] = { letter: char, status: "correct" };
      answerChars[i] = SOLVED;
      guessChars[i] = SOLVED;
    }
  });

  // Step 2: Check misplaced/incorrect letters
  guessChars.forEach((char, i) => {
    if (char === SOLVED) return;

    const misplacedIndex = answerChars.findIndex((c) => c === char);
    const status = misplacedIndex >= 0 ? "misplaced" : "incorrect";

    if (misplacedIndex >= 0) {
      answerChars[misplacedIndex] = SOLVED;
    }

    result[i] = { letter: char, status };
  });

  return result;
}
