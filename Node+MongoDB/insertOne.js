var client = require("mongodb")

dbUrl = "mongodb://localhost:27017/"

client.connect(dbUrl, function (err, db) {
    if (err) {
        throw (err)
    }
    console.log("database instance created");
    var database = db.db("nodeMongo")

    var jsonObj={"gender":"male","name":"adhi","location":"chennai"}

    database.collection("tutorial").insertOne(jsonObj,function(err,res){
        if (err) {
            throw err
        }
    

    
        console.log("one document created!!")
        db.close()
    })

})