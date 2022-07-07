const req = require('supertest');
let app = require('../index.js');

//Работает
it('Search tournament', function (done) {
    req(app).get('/tournament/2').expect({
        "id": 2,
        "tournamentName": "Турнир 2",
    }).end(done);
});

//Работает
it('Add tournament', function (done) {
    req(app).post('/tournament/add').expect({ "id": 4, "tournamentName": "Турнир 4" }).end(done);
})

//Работает
it('Edit tournament', function (done) {
    req(app).put('/tournament/3/edit').expect({
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

//Не работает
it('List of tournaments', function (done) {
    req(app).post('/tournament/search').expect([
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

//Работает
it('Delete tournament', function (done) {
    req(app).delete('/tournament/2/del').expect(200).end(done);
});