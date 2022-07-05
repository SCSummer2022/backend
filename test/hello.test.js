const request = require('supertest');
var router = require('../api/hello');


it('should return hello world!!!', function (done) {
    request(router).get('/').expect("hello world!!!").end(done);
});