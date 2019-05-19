const mongoose = require("mongoose");

const Asset = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    atribs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Atrib" }]
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model("Asset", Asset);
