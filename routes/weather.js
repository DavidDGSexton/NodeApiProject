const { json } = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('weather', { title: 'Express' });

  const weatherReport = {"Temp": 90.5, "Unit": "fahrenheit", "Cloudy": false, "PercipitationChance": 0};
  res.write(JSON.stringify(weatherReport));
});
module.exports = router;
