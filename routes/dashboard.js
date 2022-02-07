var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    statsCode:200,
    message:"Welcome to Dashboard Route"
  })
});

module.exports = router;
