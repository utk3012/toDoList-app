var express = require('express');
var mongoose = require('mongoose');
var Lists = require('../models/list-model');
var listRouter = express.Router();
var bodyParser = require('body-parser');
listRouter.use(bodyParser.json());

/* GET home page. */
listRouter.get('/', function(req, res, next) {
    Lists.find( {},function(err,list) {
        if(err) throw err;
        res.json(list);
    });
});
    listRouter.post('/', function(req, res, next){
        Lists.create(req.body, function(err,item) {
            if(err) throw err;
            console.log("list item created.");
            var id = item._id;
            // res.writeHead(200,{
            //     'Content-Type': 'text/plain'
            // });
            // res.end('Added the item with id: '+id);
            res.json(id);
        });
    });
    listRouter.delete('/:id', function (req, res, next) {
        Lists.findByIdAndRemove(req.params.id, function (err, resp) {
            if(err)
                console.log(err);
            res.json(resp);
        });
    });


module.exports = listRouter;
