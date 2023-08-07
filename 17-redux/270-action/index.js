// 1) npm init --yes => create package.json file
// 2) npm i redux => create node_modules folder and package-lock.json file
// 3) create index.js file and type console.log("Azam Golestan"); into index.js
// 4) in terminal type node .\index.js for execute

//  ------------------------------------  //

// action
function incrementCounter() {
  return {
    type: "INCREMENT_COUNTER",
  };
}
