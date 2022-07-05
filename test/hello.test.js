const req = require('supertest');

let app = require('../index.js').app

it('Should return hello world!!!', function(done) {
    req(app).get('/').expect('hello world!!!').end(done)
})