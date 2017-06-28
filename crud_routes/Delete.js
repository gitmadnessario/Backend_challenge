var express = require('express'),
	Delete_route = express.Router();

var user = require('../app/models/user');

//Delete specific
Delete_route.route("/user/:user_id")
	.delete(function(req,res){
		console.log("Delete");
		user.remove({
			_id: req.params.user_id
		},function(err,user){
			if(err)
				res.send(err);
			res.json({response:200})
		});
	});
module.exports = Delete_route;