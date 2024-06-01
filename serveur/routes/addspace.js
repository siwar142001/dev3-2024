// routes/addspace.js
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth")
const controller_space = require("../controllers/addspace");


router.post("/", controller_space.create_space);

router.get("/allSpaces",controller_space.get_all_spaces)
// screen for search spaces by  

router.get("/getSpacesForUseConnected",auth.authenticate,controller_space.get_space_user_connected)

module.exports = router;
