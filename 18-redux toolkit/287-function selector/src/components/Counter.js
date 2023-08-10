import React from "react";
import { useSelector } from "react-redux";
import { selectCounter } from "../features/counter/counterSlice";

function Counter(props) {
  const counter = useSelector(selectCounter);

  return (
    <div>
      <h2>Counter is: {counter}</h2>
    </div>
  );
}

export default Counter;
