var client = require("mongodb")

dbUrl="mongodb://localhost:27017/nodeMongo"

client.connect(dbUrl,function(err,db){
    if(err){
        throw(err)
    }
    console.log("database created");
    db.close();
})