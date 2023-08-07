// 1) npm init --yes => create package.json file
// 2) npm i redux => create node_modules folder and package-lock.json file
// 3) create index.js file and type console.log("Azam Golestan"); into index.js
// 4) in terminal type node .\index.js for execute

//  ------------------------------------  //

//  action
function incrementCounter() {
  return {
    type: "INCREMENT_COUNTER",
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

    default:
      return state;
  }
};
