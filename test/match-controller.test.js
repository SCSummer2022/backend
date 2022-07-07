const request = require('supertest');
const assert = require('assert');
const express = require("express")
const app = express()
let service = require('../service/match');

app.put('/tournament/:tournament_id/match/:match_id', require('../api/match'))

it('PUT', function (done) {
    let tournamentId = 4
    let matchId = 3
    let matchChanges = {
        "name" : "Матч 2 турнира 1 новое имя 2"
    }
    request(app)
        .put('/tournament/' + tournamentId + '/match/' + matchId + '/')
        .send(matchChanges)
        .expect(async function (res) {
            console.log('before request')
            let TargetMatch = await service.findMatch(tournamentId, matchId)
            await console.log('after request')

        })
        .end(done);
});