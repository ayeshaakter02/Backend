const createProductController = (req, res) =>{
    let {title, description, price, discountprice, reviews, variantType, stock, category, slug} = req.body;


    if (!title, !description, !price, !discountprice, !reviews, !variantType, !stock, !category, !slug) {
            return res
              .status(404)
              .json({ success: false, message: error.message || error });
          } else {
            res.send(req.body)
          }


    
}

module.exports = {createProductController}