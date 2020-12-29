const mysql = require('mysql');
const express = require('express');

const mysqlConnection = mysql.createConnection({

    host: 'localhost',
    user:'root',
    password: 'pass',
    database: 'new1',
    multipleStatements: true
    
    
});

var connect = mysqlConnection.connect((err)=>{

    if(!err)console.log('db connection succeded');
    else
        console.log('db failed' + JSON.stringify(err,undefined,2));    

});

module.exports ={

    mysqlConnection,
    connect
}

