require('dotenv').config()
const express = require("express")
const dbConnection = require("./src/config/dbconfig")
const router = require("./src/route")
const errorHandlingMiddelware = require('./src/utils/errorhandling')
const pathNotFound = require('./src/utils/pathnotfound')

const app = express()
const port = process.env.PORT || 4000

app.use(express.json());

// database connection
dbConnection()

// router middleware 
app.use(router)

//page not found middleware
app.use(pathNotFound)

// error handle
app.use((errorHandlingMiddelware))

app.listen(port,()=>{
    console.log(`server is running port number ${port}`)
})