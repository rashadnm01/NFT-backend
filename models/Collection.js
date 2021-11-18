const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "collection",
  new Schema({
    name: String,
    image_url: String,
    external_link: String,
    description: String,
    stats: String,
  })
);
