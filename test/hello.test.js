const request = require('supertest');

var app = require('../index.js').app;

it('should return hello world!!!', function (done) {
    request(app).get('/').expect('{"message":{"txt":"hello world!!!"}}').end(done);
});