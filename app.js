const express = require ("express");
const mysql = require ("mysql");

// Create connection
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456'
});

// Connect
db.connect((err) => {
  if(err){
    throw err;
  }
  console.log("MySQL Connected...");
});

const app = express();

// Create DB
app.get('/createdb', (req, res) => {
  let sql = "CREATE DATABASE nodemysql";
  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send("Database created...");
  });
});

app.listen("8080", () => {
  console.log("Server started on port 8080..");

});
