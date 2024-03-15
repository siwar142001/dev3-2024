// routes/addspace.js
const express = require("express");
const router = express.Router();
const controller_space = require("../controllers/addspace");

router.post("/spaces/addspace", controller_space.create_space);

module.exports = router;
