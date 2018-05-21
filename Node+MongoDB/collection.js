var client = require("mongodb")

dbUrl = "mongodb://localhost:27017/"

client.connect(dbUrl, function (err, db) {
    if (err) {
        throw (err)
    }
    console.log("database instance created");
    var database = db.db("nodeMongo")

    database.createCollection("tutorial", function (err, res) {
        if (err) {
            throw err
        }
        console.log("collection created!!")
        db.close()
    })

})