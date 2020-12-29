const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
const routes = require('./app/routes/routes');
var cors = require('cors');


const mysqlConnection = mysql.createConnection({

    host: 'localhost',
    user:'root',
    password: 'aroork98',
    database: 'users',
    multipleStatements: true
    
    
});

app.use(cors());

app.use(bodyparser.json());



mysqlConnection.connect;


//all
app.get('/',routes.getAll);

//one
app.get('/table1',routes.getOne)

//delete
app.delete('/:id',routes.deleteOne)

//insert
app.post('/',routes.insert);
//update
app.put('/',routes.update);


app.listen(3000,()=>console.log('server started'));