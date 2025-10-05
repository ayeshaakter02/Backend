const jwt = require('jsonwebtoken');

let TokenCheckMiddelware = (req, res, next) =>{
    let {token} = req.headers;

    try{
        jwt.verify(token, process.env.PRIVETE_KEY, function(err, decoded) {
            if(err){
                return res.status(400).json({ success:false, message:err.message})
            } else {
                req.userData = decoded
                next()
            }
});
    } catch (error) {
        return res.status(500).json({ success:false, message:err.message})
    }
}

let adminCheck = (req, res, next) => {
    console.log(req.userData)
}

module.exports = { TokenCheckMiddelware, adminCheck }