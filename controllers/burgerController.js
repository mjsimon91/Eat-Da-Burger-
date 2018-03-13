//Dependencies
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js')



//Create all of my routes

//get
router.get('/', function(req,res){
    burger.all(function(data){
        var burgerData = {
            burgers: data
        };
        console.log(burgerData);
        res.render("index",burgerData)
    })
})

//post
router.post('/api/burger', function(req, res){
  console.log('body ');
  console.log(req.body);
    burger.create(req.body.burgerName, req.body.devoured, function(results){
        res.json({ id: results.id });
    })
})

//update
router.put('/api/burger/:id', function(req,res){
    var state = "id= " + req.params.id
    console.log('state ' + state);
    console.log(req.body.devoured);
    burger.update({
        id: req.body.id,
        devoured: req.body.devoured
    },
        state, function(results){
        //find out if any rows have changed
        if (results.changedRows === 0){
            //If there were no changes, then that must mean that the selected id does not exist
            return res.status(404).end();
        }
        //Otherwise, this worked so return a 200 (success)
        res.status(200).end();
        }
    )
})

module.exports = router
