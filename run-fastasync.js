var fs = require('fs');
var path = require('path');
require("babel-register")(JSON.parse(fs.readFileSync(path.join(__dirname, '.babelrc-fastasync'))));
require('./test');