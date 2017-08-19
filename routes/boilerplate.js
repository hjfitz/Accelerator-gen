const express = require('express');

const boilerRoute = express.Router();

boilerRoute.post('/generate', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

module.exports = boilerRoute;
