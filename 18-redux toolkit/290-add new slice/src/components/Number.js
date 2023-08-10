import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, selectNumber } from "../features/number/numberSlice";

function Number(props) {
  const number = useSelector(selectNumber);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number is: {number}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Number;
