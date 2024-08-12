const express = require('express');
const router = express.Router();

// Import models
const Crop = require('../models/crop');

router.get("/enter", (req, res) => {
    res.render("crop");
  });
  
  router.post("/enter", (req, res) => {
    const myCrop = new Crop(req.body);
    myCrop.save()
    .then(() => res.redirect("/sales"));
    // console.log(req.body); //prints data to the console terminal
    // res.json(req.body); //returns data on the browser in json format
  });

  module.exports = router;