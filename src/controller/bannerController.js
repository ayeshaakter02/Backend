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

    return res.status(201).json({
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

let deleteBannerController = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Banner ID not provided",
      });
    }

    const deletedBanner = await bannerModel.findByIdAndDelete(id);

    if (!deletedBanner) {
      return res.status(404).json({
        success: false,
        message: "Banner not found",
      });
    } else {
      return res.status(200).json({
        success: true,
        message: "Banner deleted successfully",
        deletedBanner,
      });
    }
  } catch (error) {
    console.error("Error deleting banner:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

module.exports = { addBannerController, deleteBannerController };
