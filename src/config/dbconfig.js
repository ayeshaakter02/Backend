const { default: mongoose } = require("mongoose");

const dbConnection = ()=>{
    mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.fvc3cgi.mongodb.net/${process.env.DB_USERNAME}?retryWrites=true&w=majority&appName=Cluster0`).then(()=>{
        console.log(`database connection successfull`)
    }).catch((err)=>{
        console.log(err.message || "database connection failed")
    })
}



module.exports = dbConnection;