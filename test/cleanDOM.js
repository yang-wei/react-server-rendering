var jsdom = require('jsdom');

if(global.window) {
  console.log("Cleaning DOM");
  delete global.window;
  delete global.document;
  delete global.navigator;
}

