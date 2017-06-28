seneca = require('seneca')()
	.client(8008);
var id;

seneca.act({role:'POST',cmd:'Create',name: 'Kostas', age: 30, album:'Amerimacka'},function(err,msg){
		if(err)
			console.log("POST failed");
		console.log(msg);
});

seneca.act({role: 'GET', cmd: 'Retrieve'},function(err,msg){
		if(err)
			console.log("GET failed");
		console.log(msg);
});

seneca.act({role: 'PUT', cmd: 'Update',name: 'Kostas', age: 25, album:'Primo Victoria'},function(err,msg){
		if(err)
			console.log("PUT failed");
		console.log(msg);
});

seneca.act({role: 'DELETE', cmd: 'Delete'},function(err,msg){
		if(err)
			console.log("DELETE failed");
		console.log(msg);
});