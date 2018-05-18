
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
       
        
       // var sql="insert into sampleNodeTable (id,name,location) values (1,'adhi','chennai')"; //single data insert
        var sql="insert into sampleNodeTable (id,name,location) values ?"; //mulitple data insert
        var records=[
            [2,'navu','coimbatore'],
            [3,'Yu','Japan'],
            [4,'clousoe','Spain'],
        ]  //multiple data insert   

        //connection.query(sql,function(err,success){ //single insert
        connection.query(sql,[records],function(err,success){    //multiple data insert
            if(err){
                throw err
            }else{
                console.log("Data has been inserted into db :)");
            }
        } )
    }
})