const errorHandlingMiddelware = (err, req, res, next) =>{
    // console.log(err)
    // return res.status(400).json({ success: false, message: "something went wrong"})
    if (err.name === "ValidationError") {
      let errors = {};

      Object.keys(err.errors).forEach((key) => {
        errors[key] = err.errors[key].message;
      });

      return res.status(400).send(errors);
    }
}

module.exports = errorHandlingMiddelware