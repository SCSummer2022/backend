const express = require('express');
let routerTournament = express.Router();

let service = require('../service/tournament');

/* get поменял на post (8) */

routerTournament.get('/tournaments', (req, res) => {
    res.json(service.getTournamentModel())
})

module.exports = routerTournament;
