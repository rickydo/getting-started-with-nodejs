// // add a dependency
// const http = require('http');
//
// // destructuring const { requestHandler }
const {
  rootHandler,
  aboutHandler,
  notFoundHandler
} = require('./handlers');
//
// const server = http.createServer((req, res) => {
//   switch (req.url) {
//     case '/':
//       rootHandler(req,res);
//     case '/about':
//       aboutHandler(req, res);
//     default:
//       notFoundHandler(req, res);
//   }
// });

// using express down below
const express = require('express');
const server = express();

server.get('/', rootHandler);
server.get('/about', aboutHandler);
server.use(notFoundHandler);

server.listen(3333, () => {
  console.log('Server is running');
})
