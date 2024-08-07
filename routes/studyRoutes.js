const express = require('express');
const router = express.Router();

//Routes
//home page
router.get('/', (req, res) => { // new
    res.send('Homepage! Hello world.');
  });
  
  router.get('/about', (req, res) => { // new
    res.send('Your not the real heroes');
  });
  
  router.get("/member", (req, res) => {
    res.send("These are member details");
  });
  
  router.post("/addmember", (req, res) => {
    res.send("You have added a member");
  });
 
  
  //path parameters
  router.get("/students", (req, res) => {
    res.send("This is a list of students in june cohort");
  });
  router.get("/students/:name", (req, res) => {
    res.send("This is " + req.params.name + " a student from the june cohort");
  });
  router.get("/persons", (req, res) => {
    res.send("This is " + req.params.name + "  from " + req.params.class + " class ");
  });
  
//rendering a view
router.get("/first", (req, res) => {
  res.render("index");
 });
 router.post("/first", (req, res) => {
   console.log(req.body);
  });
  router.get("/quotes", (req, res) => {
    res.render("quotes")
  });
  router.post("/quotes", (req, res) => {
    console.log(req.body)
  });
  // router.get("/learning", (req, res) => {
  //   res.render("example")
  // });

  module.exports = router;

  