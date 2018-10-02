const request = require('supertest');
const app = require('./app');
const mongoose = require('mongoose');
const portscanner = require('portscanner');


debugger;

async function run() {
    const server = app.listen(3000);
    await mongoose.connect('mongodb://localhost/debugging');
    let res = await request(app).get('/name');
    debugger;
    console.log(res.status);
    server.close();
    mongoose.disconnect();
    
}

run();