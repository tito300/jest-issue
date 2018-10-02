const express = require('express');
const route = express.Router();
const Model = require('./model');
const createError = require('http-errors');


route.get('/', async (req, res)=> {
    let price = 19;
    res.write(JSON.stringify(price));
    res.end();
})

route.get('/name', async (req, res, next)=> {
    debugger;
    const name = 'tarekk';
    let product = await Model.findOne({name: name});
    if (product === null || product === undefined)  return next(createError(404, 'item not available. double check your input')) 

    res.send(`    product price: $${product._doc.name}`);
})

module.exports = route;