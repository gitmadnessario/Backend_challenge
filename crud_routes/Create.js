var express = require('express'),
	Create_route = express.Router();
	
var user = require('../app/models/user');
//Create new
Create_route.route("/user/")
	.post(function(req,res){
		console.log("Create");
		var newuser = new user();
		newuser.name = req.body.name;
		newuser.age = req.body.age;
		newuser.album = req.body.album;
		
		newuser.save(function(err){
			if(err)
				res.send(err);
			res.json(newuser);
		});
	});
	
module.exports = Create_route;