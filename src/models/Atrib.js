const mongoose = require("mongoose");

const Atrib = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  },

  {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

Atrib.virtual("url").get(function() {
  return `http://localhost:3333/atribs/${encodeURIComponent(this.path)}`;
});
module.exports = mongoose.model("Atrib", Atrib);
