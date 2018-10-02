const express = require('express');
const main = require('./routes');
const http = require('http');

const app = express();

app.use('/', main)

app.use((err, req, res, next)=>{
    if (err) res.status(404);

    res.end();
})
module.exports = app;