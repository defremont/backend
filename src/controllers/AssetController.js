const Asset = require("../models/Asset");

class AssetController {
  async store(req, res) {
    const asset = await Asset.create(req.body);

    return res.json(asset);
  }
  async show(req, res) {
    const asset = await Asset.findById(req.params.id).populate({
      path: "atribs",
      options: { sort: { createdAt: -1 } }
    });
    return res.json(asset);
  }
}

module.exports = new AssetController();
