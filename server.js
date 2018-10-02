const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/debugging')
        .then(()=> console.log('connected to mongodb debuging database'));

const server = app.listen(3000, ()=> console.log('server is listening at port 3000'));

module.exports = server;