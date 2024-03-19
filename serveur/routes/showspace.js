const express = require("express");
const router = express.Router();

const Space = require("../models/showspace")

router.get("/", async(req, res)=>{

    try {
        const spaces = await Space.find({})
        res.send({spaces});

    } catch (error) {
        return res.status(400).json({message:error});
    }


});


module.exports = router;