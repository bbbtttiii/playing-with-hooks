import React, { useState } from 'react';

export default function Calculator() {

  //hook destructured array args: 1) current state, 2) function that updates state
  const [count, setCount] = useState(0)

  //event handlers which call setCount, passing previous count+modification
  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  function multiplyBy2() {
    setCount(prevCount => prevCount * 2)
  }

  function divideBy2() {
    setCount(prevCount => prevCount / 2)
  }

  function reset() {
    setCount(0)
  }

  return (
    <div class="clicker">
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={multiplyBy2}>*</button>
      <button onClick={divideBy2}>/</button>
      <br/>
      <button onClick={reset}>R</button>
    </div>
  )
}