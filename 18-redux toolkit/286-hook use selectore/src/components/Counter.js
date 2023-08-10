import React from "react";
import { useSelector } from "react-redux";

function Counter(props) {
  const counter = useSelector((store) => store.counter.counterValue);

  return (
    <div>
      <h2>Counter is: {counter}</h2>
    </div>
  );
}

export default Counter;
