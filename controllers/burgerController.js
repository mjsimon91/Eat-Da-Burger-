//Dependencies 
var express = require('express');
var burger = require('../models/burger.js')

var router = express.Router();

//Create all of my routes 

//get
router.get('/', function(req,res){
    burger.all(function(data){
        var burgerData = {
            burgers: data
        };
        console.log(burgerData);
        
    })
})

//post
router.post('/api/burger', function(req, res){
    burger.create({
        burgerName:req.body.burgerName,
        devoured: req.body.devoured
    }).then(function(results){
        res.end();
    })
})

//update
router.put('/api/burger/:id', function(req,res){
    var state = "id= " + req.params.id 
    burger.update({
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