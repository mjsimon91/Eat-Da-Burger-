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

//update