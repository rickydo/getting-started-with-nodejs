console.log("the handlers module");

exports.rootHandler = (req, res) => {
  res.end('Hello /');
};

exports.aboutHandler = (req, res) => {
  res.end('Hello /about');
};

exports.notFoundHandler = (req, res) => {
  res.end('404');
};

// variables are scoped to files locally
// thus we need to export the variables properly
// exports
// exports.rootHandler = rootHandler;


// npm init --yes
