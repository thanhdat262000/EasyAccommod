const mysql      = require('mysql');
require('dotenv').config();


const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER_ROOT,
  database : process.env.DB_NAME,
  password : process.env.DB_USER_PASSWORD
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;