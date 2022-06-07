var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    //console.log(req)
   res.render('login')
});

router.get('/getLogin', function(req, res, next) {
  console.log(req.query)
 res.send({name:"harshita"})
  // res.render('index', { title: 'Express' });
 // res.json({"Name":req.query.Harshita})
});

router.post('/getLogin', function(req, res, next) {
    console.log(req.body)
   //res.send({name:"harshita"})
    // res.render('index', { title: 'Express' });
   res.json({"Name": req.body.Harshita})
  });

module.exports = router;