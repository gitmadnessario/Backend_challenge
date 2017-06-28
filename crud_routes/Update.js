var express = require('express'),
	Update_route = express.Router();
	
var user = require('../app/models/user');

//Update specific
Update_route.route("/user/:user_id")
	.put(function(req,res){
		console.log("Update");
		user.update({_id:req.params.user_id},req.body)
			.then(function(success){
				res.json(success);
			})
			.catch(function(err){
				res.send(err);
			});
	});
	
module.exports = Update_route;