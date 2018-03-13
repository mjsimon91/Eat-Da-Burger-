//Require the ORM
var orm = require('../config/orm.js');

var burger = {
    all: function(cb){
        orm.all("burgers", function(results){
            cb(results);
        })
    },
    create: function(burgerName, devoured, cb){
        orm.create(burgerName, devoured, function(results){
            cb(results);
        })
    },
    update: function(id, devoured, cb) {
        orm.update(id, devoured, function(results){
            cb(results);
        })
    }
};

module.exports = burger;
