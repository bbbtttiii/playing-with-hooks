import React, { useEffect, useState } from 'react';
// import { useForm } from './useForm'; //custom hook
import { Hello } from './Hello'
import { useFetch } from './useFetch'

export default function Stuff() {

  const [showHello, setShowHello] = useState(true)

  const {data, loading} = useFetch('http://numbersapi.com/100/trivia')
  const [count, setCount] = useState(0)

  return(
    <div> 
      <div>{loading ? 'loading...' : data}</div>
      <div>Count: {count}</div>
      <button onClick={() => setCount(c => c+1)}>^</button>
      <br/><br/>
      <button onClick={() => setShowHello(!showHello)}>X</button>
      {showHello && <Hello />}
    </div>
  )
  
}