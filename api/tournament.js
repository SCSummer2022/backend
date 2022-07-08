const express = require('express');
let router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.json())

let service = require('../service/tournament');

//Поиск постранично
router.post('/search', (req, res) => {
    let page = Number(req.body.page);
    let size = Number(req.body.size);
    let search = service.getListOfTournaments(page, size);
    res.json(search);
});

//Удаление турнира
router.delete('/:id', (req, res) => {
    let tournamentID = Number(req.params.id);
    let deleted = service.tournamentDel(tournamentID);
    res.json(deleted);
});

//Добавление турнира
router.post('/', (req, res) => {
    let tournamentID = Number(req.body.tournamentID);
    let tournamentName = String(req.body.tournamentName);
    let search = service.tournamentAdd(tournamentID, tournamentName);
    res.json(search);
});

//Поиск конкретного турнира
router.get('/:id', (req, res) => {
    let tournamentID = Number(req.params.id);
    let search = service.tournamentSearch(tournamentID);
    res.json(search);
});

//Редактирование турнира
router.put('/:id', (req, res) => {
    let tournamentID = Number(req.params.id);
    let tournamentNewName = String(req.body.tournamentNewName);
    let edit = service.tournamentEdit(tournamentID, tournamentNewName);
    res.json(edit)
});

module.exports = router;
