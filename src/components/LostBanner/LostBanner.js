import React from "react";

import Banner from "../Banner";

function LostBanner({ answer, onRetry }) {
  return (
    <Banner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button className="button" onClick={onRetry}>
        Retry
      </button>
    </Banner>
  );
}

export default LostBanner;
