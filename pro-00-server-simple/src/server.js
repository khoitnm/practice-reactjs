//STARTING THE SERVER

// Ref: http://alexnj.com/blog/avoid-require-relativepath-hell-in-node-js/
// ***IMPORTANT**: The following line should be added to the very
//                 beginning of your main script!
require('module-alias/register')

const express = require('express');
const app = require('./app');
const defaultRestPort = 4000;
const port = process.env.PORT || defaultRestPort;

const server = app.listen(port, ()=>{
    const productId = process.hrtime.bigint();
    console.log(`REST API server started on:
        http://localhost:` + port + `/product/0/promise <--this will cause error
        http://localhost:` + port + `/product/` + productId + `/promise <-- this will success with promise approach
        http://localhost:` + port + `/product/0/async
        http://localhost:` + port + `/product/` + productId + `/async`
    );
})

module.exports = server;
