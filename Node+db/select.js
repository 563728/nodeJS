

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
       
        var sql="select * from samplenodetable";
        connection.query(sql,function(err,result,success){
            if(err){
                throw err
            }else{
                console.log(result);
                console.log(JSON.stringify(result))
                console.log("Data has been selected from db :)");
            }
        } )
    }
})