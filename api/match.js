const express = require('express');
let bodyParser = require('body-parser')
let router = express.Router();
router.use(bodyParser.json())
let service = require('../service/match');

router.put('/tournament/:tournamentId/match/:matchId', async function (req, res) {
    let tournamentId = Number(req.params.tournamentId)
    let matchId = Number(req.params.matchId)
    await service.updateMatch(tournamentId, matchId, req.body)
    //let TargetMatch = await service.findMatch(tournamentId, matchId)
    //console.log('Match2 = ' + JSON.stringify(TargetMatch))
    res.send()
})

module.exports = router;
