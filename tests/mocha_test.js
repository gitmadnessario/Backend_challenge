	"use strict"
	let chai = require('chai');
	let chaiHttp = require('chai-http');
	let should = chai.should();
	let sinon = require('sinon');
	let expect = chai.expect;
	chai.use(chaiHttp);
	
	describe('DB testing',function(){
	
	var id; //holds the id of the new entry
	
	it('create user',function(done){
		let user = {
			name: "Kostas",
			age: 30,
			album: "Amerimacka"
		}
		chai.request('http://localhost:8080')
		.post('/user/')
		.send(user)
		.end(function(err,res){
			if(err){
				return done(err);
			}
			//post successful?
			expect(res.body._id).to.exist;
			id = res.body._id; //store the id
			done();
		});
	});
	
	it('get user',function(done){
		chai.request('http://localhost:8080')
		.get('/user/')
		.end(function(err,res){
			if(err){
				return done(err);
			}
			//check if get worked
			expect(res.body).to.exist;
			expect(res.body[0]._id).to.exist;
			done();
		});
	});
	
	
	it('update user',function(done){
		let user = {
			name: "Kostas",
			age: 25,
			album: "Battle Hymns"
		}
		chai.request('http://localhost:8080')
		.put('/user/'+id)
		.send(user)
		.end(function(err,res){
			if(err){
				return done(err);
			}
			//check if updated
			expect(res.body.ok).to.be.equal(1);
			expect(res.body.n).to.be.equal(1);
			expect(res.body.nModified).to.be.equal(1);
			done();
		})
	});
	
	it('remove user',function(done){
		chai.request('http://localhost:8080')
		.delete('/user/'+id)
		.end(function(err,res){
			if(err){
				return done(err);
			}
			expect(res.body.response).to.be.equal(200);
			done();
		})
	});
});