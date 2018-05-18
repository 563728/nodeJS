
var mysqldb=require('mysql')

var connection=mysqldb.createConnection({
    host:'localhost',
    user:'root',
    password:''
})

connection.connect(function(err){
    if(err){
        throw err
    }
    else{
        console.log("connected to mysql successfully!!!:)");
        connection.query("create database sampleDB",function(err,success){
            if(err){
                throw err;
            }
            else{
                console.log("Database created!!:)");
            }
        })      
    }
})