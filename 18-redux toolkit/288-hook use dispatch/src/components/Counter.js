import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCounter } from "../features/counter/counterSlice";
import { increment, decrement } from "../features/counter/counterSlice";

function Counter(props) {
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter is: {counter}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
