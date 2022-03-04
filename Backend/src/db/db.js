const dotenv = require('dotenv');
const mysql = require('mysql');

dotenv.config({path:'../env/.env'});

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'admin',
    password : 'admin1234',
    database : 'clinica'
});


conn.connect();


if(conn){
    console.log('Conected to database');
}else{
    console.log('Error in connection');
}



module.exports = conn;

