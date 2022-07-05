const express = require('express');
let routerTournament = express.Router();

let service = require('../service/tournament');

routerTournament.get('/tournaments', (req, res) => {
    res.json(service.getTournamentModel())
})

routerTournament.get('/tournaments/delete', (req, res) => {
    res.json(service.TournamentDel("Турнир 1"));
})

module.exports = routerTournament;
