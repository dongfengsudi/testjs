/**
 * Created by wangzihan on 2017/6/27.
 */
// var express = require('express');
// var router = express.Router();

/* GET home page. */
module.exports = function(app) {
    app.get('/', function (req, res) {
        res.render('index',{title:'Hello World'});
        // res.send('Hello World!');
    });
    app.get('/info', function (req, res){
        res.render('index', {title:'info'});
    })
};

// module.exports = router;