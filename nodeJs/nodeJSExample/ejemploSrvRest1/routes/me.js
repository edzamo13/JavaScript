const express = require('express');
const router = express.Router();
const mocks = require('../mocks')



module.exports = router
  .get('/me', (req, res, next) => {
    res
      .status(201)
      .json({ dat: 'metodo get' })

  }).get('/mocks', (req, res, next) => {
    res
      .status(200)
      .json(mocks)

  })

//module.exports = router;


