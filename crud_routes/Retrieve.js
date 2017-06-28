var express = require('express'),
	Retrieve_route = express.Router();

var user = require('../app/models/user');
//get all
Retrieve_route.route("/user/")
	.get(function(req,res){
		console.log("Retrieve");
		user.find(function(err,user){
			if(err)
				res.send(err);
			res.json(user);
		});
	});

//get specific
Retrieve_route.route("/user/:user_id")
	.get(function(req,res){
		console.log("Retrieve");
		user.findById(req.params.user_id, function(err,user){
			if(err)
				res.send(err);
			res.send(user);
		});
	});
	
module.exports = Retrieve_route;