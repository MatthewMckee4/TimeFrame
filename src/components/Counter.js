import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function decreaseCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function increaseCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <>
      <button onClick={decreaseCount}>-</button>
      <span>{count}</span>
      <button onClick={increaseCount}>+</button>
    </>
  );
}

export default Counter;
