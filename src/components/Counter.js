import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement,reset } from './Redux/CounterAction';


const Counter = () => {
    const count=useSelector((state)=>state.counter);
const dispatch=useDispatch();
const addHandler=()=>{
    dispatch(increment())
}
const minusHandler=()=>{
    dispatch(decrement())
}
const resetHandler=()=>{
    dispatch(reset())
}
  return (
    <center>
    <div>
      <button onClick={addHandler}>Increment</button>
      <button onClick={minusHandler}>Decrement</button>
      <button onClick={resetHandler}>RESET</button>
      <p>{count}</p>
    </div>
    </center>
  )
}

export default Counter
