import React from "react";

import { range } from "../../utils";

function Guess({ word }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span key={num} className={`cell ${word[num]?.status || ""}`}>
          {word[num]?.letter || ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
