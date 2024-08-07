// //Dependencies:
// const express = require('express');
// const path = require('path');


// //Instatiations
// const app = express();
// const port = 3000

// //Configurations
// //Import routes


// //set the views path
// //set view engine to pug
// app.set('view engine', 'pug');//specify the view engine
// app.set('views', path.join(__dirname,'views')); //specify the views directory



// //MIDDLEWARE

// app.use(express.urlencoded({ extended: true }));
// // Simple request time logger
// // app.use((req, res, next) => {
// //   console.log('A new request received at ' + Date.now());
// //   next();
// // });
// // //Simple request time logger for a specific route
// // app.use('/about', (req, res, next) => {
// //   console.log('A new request received at ' + Date.now());
// //   next();
// //   });



// //Routes
// //use routes/use imported routes

// // app.use("/", studyRoutes);




// //error message
// app.get("*", (req, res) => {
//   res.send("error! page does not exist");
// });



// //Bootstraping a server
// app.listen(3000, () => console.log('listening on port 3000')); // new