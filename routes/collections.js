//dependencies
const express = require("express");
const router = express.Router();
const fetch = (url) =>
  import("node-fetch").then(({ default: fetch }) => fetch(url));

const URL =
  "https://api.opensea.io/api/v1/assets?order_by=sale_count&order_direction=desc&offset=0&limit=20";
//routing
router.get("/", async (req, res) => {
  const response = await fetch(URL);
  res.send(await response.json());
});
module.exports = router;
