//Wrapper function (function (exports, require, module, __filename, __dirname) {...}
const express = require('express');
const app = express();

////ROUTING API
app.use('/', require('@src/product/router/product-router'))
// Repeat the above line for additional business areas ("deals", "vehicles", etc)

// Export the app instance for creating server and for unit testing via supertest
module.exports = app;