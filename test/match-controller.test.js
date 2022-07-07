const request = require('supertest');
const assert = require('assert');
const express = require("express")
const app = express()
let model = require('../model/matches');

app.put('/tournament/:tournament_id/match/:match_id', require('../api/match'))

it('PUT', function (done) {
    let tournament_id = 1
    let match_id = 2
    let matchChanges = {
        "name" : "Матч 2 турнира 1 новое имя"
    }
    request(app)
        .put('/tournament/' + tournament_id + '/match/' + match_id + '/')
        .send(matchChanges)
        .expect( (res) => {
            let targetMatch
            let tournaments = model.tournaments
            for (let i = 0; i < tournaments.length; i++) {
                let tournament = tournaments[i]
                if (tournament.id === tournament_id) {
                    let matches = tournament.matches
                    for (let j = 0; j < matches.length; j++) {
                        let match = matches[j]
                        if (match.id === match_id) {
                            targetMatch = match
                            break
                        }
                    }
                    break
                }
            }
            if (targetMatch) {
                for (let key in matchChanges) {
                    //console.log(key + " = " + targetMatch[key])
                    //assert.equal(targetMatch[key], matchChanges[key])
                }
            }
        })
        .end(done);
});