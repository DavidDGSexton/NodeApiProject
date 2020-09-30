const { json } = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let weatherReport = {"Temp": 90.5, "Unit": "fahrenheit", "Cloudy": false, "PercipitationChance": 0};
  res.send(weatherReport);
});
module.exports = router;
