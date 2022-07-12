const express = require('express');
let router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.json({}))

let service = require('../service/tournament');

// Поиск постранично
router.post('/tournament/search', async (req, res) => {
    let page = Number(req.body.page);
    let size = Number(req.body.size);
    let search = await service.getListOfTournaments(page, size);
    res.json(search);
});

//Удаление турнира
router.delete('/tournament/:id', (req, res) => {
    let tournamentID = Number(req.params.id);
    let deleted = service.tournamentDel(tournamentID);
    res.json(deleted);
});

//Добавление турнира
router.post('/tournament', async (req, res) => {
    // let params = req.body;
    let tId = Number(req.body.id);
    let nameInp = String(req.body.name);
    let tType = Number(req.body.tournament_type_id);
    let sType = Number(req.body.sport_type);
    let stDate = Date(req.body.start_date);
    let endDate = Date(req.body.end_date);
    let scOrCi = Boolean(req.body.school_or_city);
    let tSize = Number(req.body.team_size);
    let search = service.tournamentAdd(req.body);
    res.json(search);
});

// //Поиск конкретного турнира
// router.get('/tournament/:id', async (req, res) => {
//     let tournamentID = Number(req.params.id);
//     let search = service.tournamentSearch(tournamentID);
//     res.json(search);
// });

//Редактирование турнира
router.put('/tournament/:id', async (req, res) => {
    let tournamentID = Number(req.params.id);
    let nameInp = String(req.body.name);

    let edit = service.tournamentEdit(tournamentID, req.body);
    res.json(edit)
});

module.exports = router;
