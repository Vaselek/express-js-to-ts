const express = require('express');
const greet = require('./smallModule');
const { complexCalculation } = require('./bigModule.js');

const router = express.Router();

router.get('/greet/:name', (req, res) => {
  res.send(greet(req.params.name));
});

router.get('/calculate', (req, res) => {
  const result = complexCalculation(5, 10);
  res.send(`Result: ${result}`);
});

module.exports = router;