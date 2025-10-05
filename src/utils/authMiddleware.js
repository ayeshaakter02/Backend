const jwt = require('jsonwebtoken');

let authMiddelware = (req, res, next) =>{
    let {token} = req.headers;

    try{
        jwt.verify(token, process.env.PRIVETE_KEY, function(err, decoded) {
            if(err){
                return res.status(400).json({ success:false, message:err.message})
            } else {
                next()
            }
});
    } catch (error) {
        return res.status(500).json({ success:false, message:err.message})
    }

    // if(token == 123){
    //     next()
    // }else{
    //     return res.status(501).json({success: false, message: "unauthorize"})
    // }
    
}
module.exports = {authMiddelware}