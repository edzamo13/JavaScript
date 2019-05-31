const express = require('express');
const router = express.Router();
const mocks = require('../mocks')
const auth = require('../src/middlewares');



module.exports = router
    .get('/music', (req, res, next) => {
        res
            .status(200)
            .json(mocks)
    })
    .post('/music', auth, (req, res, next) => {
        console.log('Body received:', req.body)

        res
            .status(201)
            .json(req.body)
    })
    .get('/music/:singer', (req, res, next) => {
        console.log('mocks', mocks.mocks)
        //   mocks.mocks.forEach(emotion => console.log('foreach', emotion));
        const resultado = mocks.mocks.find(mocks => mocks.singer.toLocaleLowerCase() === req.params.singer.toLowerCase());
        res
            .status(200)
            .json(resultado)


    }) 