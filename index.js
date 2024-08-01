const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => { // new
  res.send('Homepage! Hello world.');
});

app.get('/about', (req, res) => { // new
  res.send('Your not the real heroes');
});

app.get("/member", (req, res) => {
  res.send("These are member details");
});

app.post("/addmember", (req, res) => {
  res.send("You have added a member");
});
//path parameters
app.get("/students", (req, res) => {
  res.send("This is a list of students in june cohort");
});
app.get("/students/:name", (req, res) => {
  res.send("This is " + req.params.name + " a student from the june cohort");
});
app.get("/persons", (req, res) => {
  res.send("This is " + req.params.name + "  from " + req.params.class + " class ");
});

//serving html files
//get route for the file in the same directory
app.get("/first", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/quotes", (req, res) => {
  res.sendFile(__dirname + "/quotes.html");
});
app.post("/quotes", (req, res) => {
  console.log(req.body)
});





//error message
// app.get("*", (req, res) => {
//   res.send("error! page does not exist");
// });




app.listen(3000, () => console.log('listening on port 3000')); // new