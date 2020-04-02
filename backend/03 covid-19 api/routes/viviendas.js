const express = require("express");
const router = express.Router();

router.get("/viviendas", (req, res) => {
  res.send("Endpoin de viviendas");
});

module.exports = router;
