const express = require('express');
const router = express.Router();
const jwt = require('jwt-simple');

module.exports = router.post('/auth', (req, res, next) => {
  console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
  console.log('emial paramero', req.params.email)
  const payload = {
    //email: req.params.email
    email: 'edzamo@hotmail.com'
  }
  const token = jwt.encode(payload, req.app.locals.config.TOKEN)
  const decoded = jwt.decode(token,req.app.locals.config.TOKEN)

  console.log('encode',token)
  console.log('decoded',decoded)

  return res
    .status(401)
    .send({'token':token})


});

