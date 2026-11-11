import React, { useState } from "react";

function useCalculator() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }

  function reset() {
    setCount(0);
  }

  return { count, increment, decrement, reset };
}

export default useCalculator;
