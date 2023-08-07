// 1) npm init --yes => create package.json file
// 2) npm i redux => create node_modules folder and package-lock.json file
// 3) create index.js file and type console.log("Azam Golestan"); into index.js
// 4) in terminal type node .\index.js for execute

// 5) npm i redux-logger => for add middleWare logger

//  ------------------------------------  //

const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

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

function incrementNumber() {
  return {
    type: "INCREMENT_NUMBER",
  };
}

// state
const initialCounterState = {
  counter: 0,
};

const initialNumberState = {
  number: 12,
};

// reducer
const counterReducer = (state = initialCounterState, action) => {
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

const numberReducer = (state = initialNumberState, action) => {
  switch (action.type) {
    case "INCREMENT_NUMBER":
      return {
        ...state,
        number: state.number + 1,
      };

    default:
      return state;
  }
};

// store
const rootReducer = combineReducers({
  counter: counterReducer,
  number: numberReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));

console.log(store.getState());

// dispatch
store.dispatch(incrementCounter());

store.dispatch(decrementCounter());

store.dispatch(incrementCounterByAmount(10));

store.dispatch(incrementNumber());
