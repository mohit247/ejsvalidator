// const {check, validationResult } = require('express-validator');
// const express = require('express');
// const bodyparser = require('body-parser');
// const path = require('path')
// const app = express();

// var port = process.env.port || 3000 

// //view engine setup
// app.set("views", path.join(__dirname))
// app.set("view engine", "ejs")
// //
// app.use(bodyparser.urlencoded({extended: false}))
// app.use(bodyparser.json())

// app.get("/", function (req,res){
//     res.render("SampleForm");

// })
// app.post('/saveData', [
//     check('email','email length should be 10 tp 30').isEmail().isLength({min:10, max: 30}),
//     check('name', 'name length should be 10 to 20').isLength({min:10, max:30}),
//     check('number','number should be 10 digits').isLength({min:10, max:10}),
//     check('password','password should be 10 digits').isLength({min:8, max:20})
// ], (req,res)=>{
//     const error = validationResult(req);
//     if(!error.isEmpty()){
//         res.json(error);
//     }
//     else {
//         res.send("successfully validated")
//     }
// });

// app.listen(port, (err)=>{
//     if (err) throw err 
//     console.log(`server created at ${port} `);
// })

const { check, validationResult } 
	= require('express-validator'); 

const bodyparser = require('body-parser') 
const express = require("express") 
const path = require('path') 
const app = express() 

var PORT = process.env.port || 3000 

// View Engine Setup 
app.set("views", path.join(__dirname, 'views')) 
app.set("view engine", "ejs") 

// Body-parser middleware 
app.use(bodyparser.urlencoded({ extended: false })) 
app.use(bodyparser.json()) 

app.get("/", function (req, res) { 
	res.render("SampleForm"); 
}) 

// check() is a middleware used to validate 
// the incomming data as per the fields 
app.post('/saveData', [ 
	check('email', 'Email length should be 10 to 30 characters') 
					.isEmail().isLength({ min: 10, max: 30 }), 
	check('name', 'Name length should be 10 to 20 characters') 
					.isLength({ min: 10, max: 20 }), 
	check('mobile', 'Mobile number should contains 10 digits') 
					.isLength({ min: 10, max: 10 }), 
	check('password', 'Password length should be 8 to 10 characters') 
					.isLength({ min: 8, max: 10 }) 
], (req, res) => { 

	// validationResult function checks whether 
	// any occurs or not and return an object 
	const errors = validationResult(req); 

	// If some error occurs, then this 
	// block of code will run 
	if (!errors.isEmpty()) { 
		res.json(JSON.stringify(errors)) 
	} 

	// If no error occurs, then this 
	// block of code will run 
	else { 
		res.send("Successfully validated") 
	} 
}); 

app.listen(PORT, function (error) { 
	if (error) throw error 
	console.log("Server created Successfully on PORT ", PORT) 
}) 
