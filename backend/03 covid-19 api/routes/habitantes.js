const express = require("express");
const router = express.Router();

router.get("/habitantes", (req, res) => {
  res.send("Endpoin de personas");
});

module.exports = router;
