const request = require('supertest');

var app = require('../index').app;

it('should return Hello World', function (done) {
    request(app).get('/').expect({message: {txt: "hello world!!!"}}).end(done);
});

