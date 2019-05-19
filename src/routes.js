const express = require("express");
const multer = require("multer");
const multerConfig = require("./config/multer");

const routes = express.Router();

const AssetController = require("./controllers/AssetController");
const AtribController = require("./controllers/AtribController");

routes.post("/assets", AssetController.store);
routes.get("/assets/:id", AssetController.show);
routes.post(
  "/assets/:id/atribs",
  multer(multerConfig).single("atrib"),
  AtribController.store
);

module.exports = routes;
