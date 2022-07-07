const request = require('supertest');
const assert = require('assert');
const express = require("express")
const app = express()
let service = require('../service/match');

app.post('/tournament/:tournamentId/match/:matchId', require('../api/match'))
app.post('/tournament/:tournamentId/match', require('../api/match'))
app.put('/tournament/:tournamentId/match/:matchId', require('../api/match'))
app.delete('/tournament/:tournamentId/match/:matchId', require('../api/match'))


it('Поиск матчей (POST)', async function () {
    let tournamentId = 4
    let body = {
        page: 0,
        pageSize: 2
    }
    let response = await request(app)
        .post('/tournament/' + tournamentId + '/match/search')
        .send(body);

    let targetMatches = await service.findMatches(tournamentId, body.page, body.pageSize)
    assert.notStrictEqual(targetMatches, response.body)
});

it('Добаление матча (POST)', async function () {
    let tournamentId = 10
    let matchData = {
        matchId: '14',
        matchName: 'Добавленный матч'
    }
    let response = await request(app)
        .post('/tournament/' + tournamentId + '/match').
        send(matchData);

    assert.notEqual(await service.findMatch(tournamentId, matchData.matchId), null)
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
        assert.equal(targetMatch[key], matchChanges[key])
    }
});

it('Удаление матча (DELETE)', async function () {
    let tournamentId = 4
    let matchId = 3
    let response = await request(app)
        .delete('/tournament/' + tournamentId + '/match/' + matchId)
        .send()

    assert.equal(await service.findMatch(tournamentId, matchId), null)
});