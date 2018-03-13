//Dependencies
//require the database connection.js file
var connection = require('./connection.js')

//Create a function that will act as the helper text for mysql

function displayQuestionMarks(num){
    var array = []
    for (let i = 0; i < num.length; i++) {
        array.push("?");

        return array.toString();
    }
}

//Convert an object from key/value pair into the sql syntax
function objToSql(ob) {
    var arr = [];
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

// In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
var orm = {
    //      * `selectAll()`
    all: function(tableInput, cb){
        var queryString = 'SELECT * FROM ' + tableInput + ";";
        connection.query(queryString, function(error, result){
            if (error){
                throw error
            }
            cb(result);
        });
    },
    //      * `insertOne()`
    create: function(burgerName, devoured, callback) {
      var queryString = "INSERT INTO burgers(burgerName, devoured) VALUES(?,?)";

        console.log(queryString);
        console.log(burgerName)

        connection.query(queryString, [burgerName, devoured], function(err, result) {
          if (err) {
            throw err;
          }

          // callback(result);
        });
      },
    //      * `updateOne()`
    update: function(burger, callback) {
        var queryString = 'UPDATE burgers Set devoured = 1 WHERE id = ?';
        console.log(queryString);
        console.log(burger)
        var burgerID = burger.id;
        console.log('burgerID ' + burgerID);
        connection.query(queryString,[burger.id], function(err, result) {
          if (err) {
            throw err;
          }
        });
      }
}

module.exports = orm;
