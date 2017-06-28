task 6: not completed,code is provided

npm start: stats the db + server
npm test: runs the mocha tests(tests/mocha.js)
npm client: runs the seneca client

The database comes with one record, the postman collection
comes pre-built with Delete/Update/Retrieve(entry) with the 
correct _id.

Create:		POST localhost:8080/user/
Retrieve all: 	GET localhost:8080/user/
Retrieve entry: GET localhost:8080/user/:user_id
Update:		PUT localhost:8080/user/:user_id
Delete:		DELETE localhost:8080/user/:user_id

crud_routes/index.js: Creates the routes for the CRUD  api.
		Some functionality is left unused.