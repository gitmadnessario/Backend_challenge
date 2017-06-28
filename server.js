//setup express
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

var bodyParser = require('body-parser');

//init mongoose
var mongoose = require('mongoose');
//better performance than native
mongoose.Promise = require('bluebird');

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//config mongoose/mongoDB

mongoose.connect('mongodb://localhost/user');

var router = express.Router();
app.use('/',router);
//handle the 4 routes
var crud_routes = require('./crud_routes')(app);

// var Web = require('seneca-web');
// var config = {
  // routes: crud_routes,
  // adapter: require('seneca-web-adapter-express'),
  // context: express()
// };

var seneca = require('seneca')()
	.use(require('./enclave.js'))
	//.use(Web,config)
	.listen(8008);

app.listen(port);

router.get('/', function(req,res){
	res.json({ response:"Hello World"})
});

console.log(seneca.list());
//seneca.act('role:math,cmd:sum,left:1,right:2', console.log);