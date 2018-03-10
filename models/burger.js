//Require the ORM
var orm = require('../config/orm.js');

var burger = {
    all: function(cb){
        orm.all("burgers", function(results){
            cb(results);
        })
    },
    create: function(cb){
        orm.create("burgers", function(results){
            cb(results);
        })
    },
    update: function(cb) {
        orm.update("burgers", function(results){
            cb(results);
        })
    }
};

module.exports = burger;