"use client"

import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  selectCounter,
} from "../redux/features/counter/counterSlice";
import { useState } from "react";

function Counter(props) {
  const [value, setValue] = useState(2);

  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter is: {counter}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <div>
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(+value))}>
          Increment By Amount
        </button>
      </div>
    </div>
  );
}

export default Counter;