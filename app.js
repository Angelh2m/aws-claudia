const ApiBuilder = require('claudia-api-builder'),

    api = new ApiBuilder();

module.exports = api;

api.get('/hello', function() {
    return 'hello world';
});

// INSATALL: claudia create --region us-east-1 --api-module app
// CREATE: npm install claudia-api-builder -S 
// DEPLOY: claudia create --region us-east-1 --api-module app
// https://claudiajs.com/tutorials/hello-world-api-gateway.html
// "https://j8xiuyokv3.execute-api.us-east-1.amazonaws.com/latest"