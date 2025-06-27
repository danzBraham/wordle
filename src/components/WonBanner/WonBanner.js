import React from "react";

import Banner from "../Banner";

function WonBanner({ numOfGuesses, onRetry }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}</strong>.
      </p>
      <button className="button" onClick={onRetry}>
        Retry
      </button>
    </Banner>
  );
}

export default WonBanner;
