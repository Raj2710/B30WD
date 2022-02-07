var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({
    statsCode:200,
    message:"Welcome to Index Route"
  })
});

module.exports = router;
