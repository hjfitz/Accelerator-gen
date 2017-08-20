const express = require('express');

const boilerRoute = express.Router();

const allowedLayouts = ['react', 'html', 'handlebars'];

boilerRoute.post('/generate', (req, res) => {
  const layout = req.body.layout;
  if (allowedLayouts.indexOf(layout) === -1) {
    res.json({ cod: 'error', item: 'layout' });
  } else {
    // generate the boilerplate
  }
});

module.exports = boilerRoute;
