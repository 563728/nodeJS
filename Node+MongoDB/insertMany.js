var client = require("mongodb")

dbUrl = "mongodb://localhost:27017/"

client.connect(dbUrl, function (err, db) {
    if (err) {
        throw (err)
    }
    console.log("database instance created");
    var database = db.db("nodeMongo")

    var jsonObj=[
        {"gender":"male","name":"Naveen","location":"UAE"},
        {"gender":"female","name":"Divya","location":"Delhi"},
        {"gender":"male","name":"Praveen","location":"Goa"},
        {"gender":"female","name":"Lisa","location":"US"}
    ]

    database.collection("tutorial").insert(jsonObj,function(err,res){
        if (err) {
            throw err
        }
    
        console.log("one document created!!")
        db.close()
    })

})