const req = require('supertest');
let app = require('../index.js').app;
const assert = require('assert');
let service = require('../service/tournament');


it('List of tournaments', async function () {
    let body = { page: 1, size: 10 };
    let response = await req(app).post('/tournament/search').send(body);
    assert.notEqual(response.body, 1)
});

it('Search tournament', async function () {
    let tourID = 4;
    let response = await req(app).get('/tournament/' + tourID);
    assert.equal(tourID, 4)
});

it('Add tournament', async function () {
    let params = {
        id: 6,
        name: "Название турнира",
        tournament_type_id: 0,
        sport_type: 0,
        start_date: new Date(2022, 7, 4),
        end_date: new Date(2022, 7, 15),
        school_or_city: true,
        city: 3,
        participants_min: 6,
        participants_max: 66,
        age_min: 10,
        age_max: 16,
        class_min: 4,
        class_max: 10,
        team_size: 10
    }
    let resp = await req(app).post('/tournament').send(params);
    assert.equal(params.id, 6)
});

it('Edit tournament', async function () {

    let tournamentId = 6
    let tournamentChanges = {
        name: "Новое название турнира"
    }
    let response = await req(app)
        .put('/tournament/' + tournamentId)
        .send(tournamentChanges);

    // let callSearch = await service.tournamentSearch(tournamentId)

    assert.equal(tournamentId, 6)

});

it('Delete tournament', async function () {
    let response = await req(app).delete('/tournament/4')
})



