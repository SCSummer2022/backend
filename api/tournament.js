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
    //использовать параметры из запроса
    let i = 4;
    let search = service.tournamentAdd(i, 'Турнир 4');
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
    //todo use req.body - параметры из запроса
    let edit = service.tournamentEdit(tournamentID, "Какое-то новое название турнира");
    res.json(edit)
});

module.exports = router;
