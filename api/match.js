const express = require('express');
let bodyParser = require('body-parser')
let router = express.Router();
router.use(bodyParser.json())
let service = require('../service/match');

router.post('/tournament/:tournamentId/match/search', async function (req, res) {
    let tournamentId = Number(req.params.tournamentId)
    res.send(await service.findMatches(tournamentId, req.body.page, req.body.pageSize))
})

router.post('/tournament/:tournamentId/match', async function (req, res) {
    let tournamentId = Number(req.params.tournamentId)
    await service.addMatch(tournamentId, req.body)
    res.send()
})

router.put('/tournament/:tournamentId/match/:matchId', async function (req, res) {
    let tournamentId = Number(req.params.tournamentId)
    let matchId = Number(req.params.matchId)
    await service.updateMatch(tournamentId, matchId, req.body)
    res.send()
})

router.delete('/tournament/:tournamentId/match/:matchId', async function (req, res){
    let tournamentId = Number(req.params.tournamentId)
    let matchId = Number(req.params.matchId)
    await service.deleteMatch(tournamentId, matchId)
    res.send()
})

module.exports = router;
