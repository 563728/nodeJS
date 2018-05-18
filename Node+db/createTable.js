
var mysqldb=require('mysql')

var connection=mysqldb.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'sampleDB'
})

connection.connect(function(err){
    if(err){
        throw err
    }
    else{
        console.log("connected to mysql successfully!!!:)");
       /* connection.query("create database sampleDB",function(err,success){
            if(err){
                throw err;
            }
            else{
                console.log("Database created!!:)");
            }
        })  */
        
        var sql="create table sampleNodeTable ( name varchar(12), id int(4), location varchar(30))";
        connection.query(sql,function(err,success){
            if(err){
                throw err
            }else{
                console.log("Table has been created in db");
            }
        } )
    }
})