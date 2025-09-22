require('dotenv').config()
const express = require("express")
const dbConnection = require("./src/config/dbconfig")
const router = require("./src/route")

const app = express()
const port = process.env.PORT || 4000

// database connection
dbConnection()

// router middleware 
app.use(router)

app.listen(port,()=>{
    console.log(`server is running port number ${port}`)
})