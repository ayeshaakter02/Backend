require('dotenv').config()
const express = require("express")
const dbConnection = require("./src/config/dbconfig")
const router = require("./src/route")
const errorHandlingMiddelware = require('./src/utils/errorhandling')
const pathNotFound = require('./src/utils/pathnotfound')
const session = require('express-session')

const app = express()
const port = process.env.PORT || 4000

// staeful authenticarion 
app.use(session({
  secret: "key",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

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