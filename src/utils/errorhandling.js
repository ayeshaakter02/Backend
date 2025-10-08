const errorHandlingMiddelware = (err, req, res, next) =>{
    
    if (err.name === "ValidationError") {
      let errors = {};

      Object.keys(err.errors).forEach((key) => {
        errors[key] = err.errors[key].message;
      });

      return res.status(400).send(errors);
    }else{
      return res.status(400).json({success: false, message: "Internal server error"});
    }
}

module.exports = errorHandlingMiddelware