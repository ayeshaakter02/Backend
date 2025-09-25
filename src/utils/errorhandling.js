const errorHandlingMiddelware = (err, req, res, nex) =>{
    console.log(err.message)
}

module.exports = errorHandlingMiddelware