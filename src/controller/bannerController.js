const bannerModel = require("../model/banner.model");

let addBannerController = async (req, res) => {

  let { link } = req.body;
  let { filename } = req.file;
  try {
    let banner = await new bannerModel({
      image: `${process.env.SERVER_URL}/${filename}`,
      link,
    });
    await banner.save();

    return res
      .status(201)
      .json({
        success: true,
        message: "banner created successfull",
        data: banner,
      });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: error.message || error });
  }
};

module.exports = { addBannerController };
