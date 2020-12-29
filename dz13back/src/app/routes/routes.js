const mysql = require('mysql');
const express = require('express');

var mysqlConnection = mysql.createConnection({

    host: 'localhost',
    user:'root',
    password: 'aroork98',
    database: 'users',
    multipleStatements: true
    
    
});

const getAll = (req,res)=>{
        
        mysqlConnection.query('SELECT * FROM users',(err,rows,fields)=>{
        
            if(!err)
                res.send(rows);
            else
                console.log(err);
            
        
        })        
        };



const getOne = (req,res)=>{
        
        mysqlConnection.query('SELECT FROM users WHERE ID = ?',[req.params.id],(err,rows,fields)=>{
        
            if(!err)
                res.send(rows);
            else
                console.log(err);
            
        
        })        
        };


const deleteOne = (req,res)=>{
        
        mysqlConnection.query('DELETE FROM users WHERE ID = ?',[req.params.id],(err,rows,fields)=>{
        
            if(!err)
                res.send('deleted succeded');
            else
                console.log(err);
            
        
        })        
        };

const insert = (req,res)=>{
        let emp = req.body;
        var sql = "SET @Name = ?;SET @Password = ?; SET @Email =?;\
        CALL new_user(@Name,@Password,@Email);";
        mysqlConnection.query(sql,[emp.Name,emp.Password,emp.Email],(err,rows,fields)=>{
        
            if(!err)
                        res.send('inserted id:' );
                
            else
                console.log(err);
            
        
        })        
        };

const update = (req,res)=>{
        let emp = req.body;
        var sql = "SET @ID = ?;SET @Name = ?; SET @Done =?;\
        CALL addOrEdit(@ID,@Name,@Done);";
        mysqlConnection.query(sql,[emp.ID,emp.Name,emp.Done],(err,rows,fields)=>{
        
            if(!err)
                res.send('updated success');
            else
                console.log(err);
            
        
        })        
        };

module.exports ={

    getAll,
    getOne,
    deleteOne,
    insert,
    update
}


