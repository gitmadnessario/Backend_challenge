module.exports = function math(options) {

	this.add('role:GET,cmd:Retrieve',GETu); 
	this.add('role:POST,cmd:Create',POSTu); 
	this.add('role:PUT,cmd:Update',PUTu); 
	this.add('role:DELETE,cmd:Delete',DELETEu);
  
  
	// this.add('role:foo,cmd:bar',function(args,done){
	  // done(null,{bar:args.zoo+'b'})
	// })

	// this.act('role:web',{use:{
	  // prefix:'/foo',
	  // pin:{role:'foo',cmd:'*'},
	  // map:{
		// bar: {GET:true}
	  // }
	// }})

  // this.act('role:web',{use:{
	// pin: {role:'GET',cmd:'Retrieve'},
	// map:{
		// 'Retrieve':{GET:true},
	// }
  // }});
 
 
  function POSTu(msg,respond){
	var out = {answer:msg.age};
	respond(null,out);
  }
  
  function PUTu(msg,respond){
	var out = {answer:msg.age}
	respond(null,out);
  }
  
  function GETu(msg,respond){
	// this.act('role:web',{routes:{
		// prefix: '/user/',
		// map:{
			// calculate: {GET: true}
		// }
	// }},respond);
	// console.log(respond);
	var out = {answer:3};
	respond(null,out);
  }
  
  function DELETEu(msg,respond){
	var out = {answer:4}
	respond(null,out);
  }

}