const inquirer = require("inquirer");
const mysql = require("mysql2");
const ctable = require("console.table");


//----conección para la base de datos
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "76924",
    database: "employeetDB",
});

connection.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
});