// routes/addspace.js
const express = require("express");
const router = express.Router();
const controller_user= require("../controllers/adduser");
const controller_login= require("../controllers/login");


router.post("/signup", controller_user.create_user);
router.post("/login", controller_login.user_login);

router.get("/users", controller_user.get_all_users);



module.exports = router;
