const request = require('supertest');
var app = require('../index.js');


it('should return hello world!!!', function (done) {
    request(app).get('/tournaments').expect({
        tournament: {
            txt: "hello world!!!"
        }
    }).end(done);
});