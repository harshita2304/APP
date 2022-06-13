var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/fillform1', function(req, res, next) {
  console.log(req)
//   res.json({name:"harshita"})
   res.render('fillform1', { title: 'Express' });
});

module.exports = router;