const request = require('supertest');
const assert = require('assert');
const express = require("express")
const app = express()
let service = require('../service/match');

app.post('/tournament/:tournament_id/match/*', require('../api/match'))
app.put('/tournament/:tournament_id/match/*', require('../api/match'))
app.delete('/tournament/:tournament_id/match/:match_id', require('../api/match'))


it('Поиск матчей (POST)', async function () {
    let tournamentId = 4
    let matchId = 3
    let body = {
        page: 0,
        pageSize: 2
    }
    let response = await request(app)
        .post('/tournament/' + tournamentId + '/match/search')
        .send(body);


});

it('Обновление матча (PUT)', async function () {
    let tournamentId = 4
    let matchId = 3
    let matchChanges = {
        name: 'Матч 2 турнира 1 новое имя 3'
    }
    let response = await request(app)
        .put('/tournament/' + tournamentId + '/match/' + matchId + '/')
        .send(matchChanges);

    let targetMatch = await service.findMatch(tournamentId, matchId)
    for (let key in matchChanges) {
        console.log(targetMatch[key] + ' vs ' + matchChanges[key])
        assert.equal(targetMatch[key], matchChanges[key])
    }
});

it('DELETE', async function () {
    let tournamentId = 4
    let matchId = 3

    let response = await request(app)
        .delete('/tournament/' + tournamentId + '/match/' + matchId)
        .send()

    let DeletedMatch = await service.findMatch(tournamentId, matchId)
});