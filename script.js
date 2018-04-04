// start an event loop
// node script.js "Ricky Do"
const name = process.argv[2];
console.log("hello " + name);

// NAME="Ricky Do" node script.js
// console.log("Hello " + NAME);

// ASYNC === EVENT LOOP
setInterval(() => {
  console.log('Hello again');
}, 5000);


console.log('Another hello');
// process.exit();
