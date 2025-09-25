const errorHandlingMiddelware = (err, req, res, nex) =>{
    console.log("err.message")
    return res.status(400).json({ success: false, message: "something went wrong"})
}

module.exports = errorHandlingMiddelware