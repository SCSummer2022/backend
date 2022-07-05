const request = require('supertest');
var app = require('../index.js');


it('Delete tournament', function (done) {
    request(app).get('/tournaments/delete').expect([
        {
            "id": 2,
            "tournamentName": "Турнир 2"
        },
        {
            "id": 3,
            "tournamentName": "Турнир 3"
        }
    ]
    ).end(done);
});