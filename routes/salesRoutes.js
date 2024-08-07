const express = require('express');
const router = express.Router();

router.get("/sales", (req, res) => {
    res.render("sales-agent");
  });
  
  router.post("/sales", (req, res) => {
    console.log(req.body); //prints data to the console terminal
    res.json(req.body); //returns data on the browser in json format
  });

  module.exports = router;