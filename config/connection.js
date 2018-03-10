//Dependencies 
var mysql = require('mysql');

//Connect to mysql database
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
});

module.exports = connection;