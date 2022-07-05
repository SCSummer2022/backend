const express = require('express');
let bodyParser = require('body-parser')
let router = express.Router();
router.use(bodyParser.json())
let model = require("../model/matches");

router.put('/tournament/:tournament_id/match/:match_id', (req, res) => {
    console.log('body.name: ' + req.body.name)
    let tournament_id = Number(req.params.tournament_id)
    console.log('tournament_id: '+ tournament_id)
    let match_id = Number(req.params.match_id)
    console.log('match_id: '+ match_id)

    let tournaments = model.tournaments
    for (let i = 0; i < tournaments.length; i++) {
        let tournament = tournaments[i]
        if (tournament.id === tournament_id) {
            let matches = tournament.matches
            for (let j = 0; j < matches.length; j++) {
                let match = matches[j]
                if (match.id === match_id) {
                    for (let key in req.body) {
                        console.log(key + " = " + match[key])
                        match[key] = req.body[key]
                        console.log(key + " = " + match[key])
                    }
                    break
                }
            }
            break
        }
    }

    res.send("")
})

module.exports = router;
