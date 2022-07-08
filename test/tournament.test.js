const req = require('supertest');
let app = require('../index.js');


it('Search tournament', function (done) {
    req(app).get('/tournament/2').expect({
        "id": 2,
        "tournamentName": "Турнир 2",
    }).end(done);
});


it('Add tournament', function (done) {
    req(app).post('/tournament').send({ tournamentID: 4, tournamentName: "Турнир 4" }).expect({ "id": 4, "tournamentName": "Турнир 4" }).end(done);
})


it('Edit tournament', function (done) {
    req(app).put('/tournament/3').send({
        tournamentNewName: "Какое-то новое название турнира"
    }).expect({
        "tournaments": [
            {
                "id": 1,
                "tournamentName": "Турнир 1"
            },
            {
                "id": 2,
                "tournamentName": "Турнир 2"
            },
            {
                "id": 3,
                "tournamentName": "Какое-то новое название турнира"
            },
            {
                "id": 4,
                "tournamentName": "Турнир 4"
            }]
    }).end(done);
});


it('List of tournaments', function (done) {
    req(app).post('/tournament/search')
        .send({ page: 1, size: 3 })
        .expect([
            {
                "id": 1,
                "tournamentName": "Турнир 1"
            },
            {
                "id": 2,
                "tournamentName": "Турнир 2"
            },
            {
                "id": 3,
                "tournamentName": "Какое-то новое название турнира"
            }]).end(done);
});


it('Delete tournament', function (done) {
    req(app).delete('/tournament/2').expect(200).end(done);
});