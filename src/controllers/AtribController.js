const Atrib = require("../models/Atrib");
const Asset = require("../models/Asset");

class AtribController {
  async store(req, res) {
    const asset = await Asset.findById(req.params.id);
    console.log(req.file);
    const atrib = await Atrib.create({
      title: req.file.originalname,
      path: req.file.key
    });

    asset.atribs.push(atrib);
    await asset.save();

    req.io.sockets.in(asset._id).emit("atrib", atrib);
    return res.json(atrib);
  }
}

module.exports = new AtribController();
