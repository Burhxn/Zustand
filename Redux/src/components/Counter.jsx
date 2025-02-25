import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../app/features/counter/counterSlice';

const Counter = () => {

    const count = useSelector((state)=> state.counter.value)
   const dispatch = useDispatch();
   
   
  return (
    <div>{count}
    
    <button onClick={()=>dispatch(decrement())} >-</button>
    <button onClick={()=>dispatch(increment())}>+</button>
    </div>
  )
}

export default Counter