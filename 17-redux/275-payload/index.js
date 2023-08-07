// 1) npm init --yes => create package.json file
// 2) npm i redux => create node_modules folder and package-lock.json file
// 3) create index.js file and type console.log("Azam Golestan"); into index.js
// 4) in terminal type node .\index.js for execute

//  ------------------------------------  //

const createStore = require("redux").createStore;

//  action
function incrementCounter() {
  return {
    type: "INCREMENT_COUNTER",
  };
}

function decrementCounter() {
  return {
    type: "DECREMENT_COUNTER",
  };
}

function incrementCounterByAmount(amount = 1) {
  return {
    type: "INCREMENT_COUNTER_BY_AMOUNT",
    payload: amount,
  };
}

const initialState = {
  counter: 0,
  number: 5,
};

// reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return {
        ...state,
        counter: state.counter + 1,
      };

    case "DECREMENT_COUNTER":
      return {
        ...state,
        counter: state.counter - 1,
      };

    case "INCREMENT_COUNTER_BY_AMOUNT":
      return {
        ...state,
        counter: state.counter + action.payload,
      };

    default:
      return state;
  }
};

// store
const store = createStore(counterReducer);

console.log(store.getState());

// dispatch
store.dispatch(incrementCounter());

console.log(store.getState());

store.dispatch(decrementCounter());

console.log(store.getState());

store.dispatch(incrementCounterByAmount(10));

console.log(store.getState());
