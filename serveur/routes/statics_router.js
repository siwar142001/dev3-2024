const express = require("express");
const router = express.Router(); 
const controller_statisques= require("../controllers/get-all-statics-ctrl");

router.get("/get_all_statics",controller_statisques.get_all_statics)

module.exports = router;