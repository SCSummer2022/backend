const express = require('express');
let router = express.Router();

let service = require('../service/tournament');

//Поиск постранично
// router.post('/search', (req, res) => {
//     res.json(service.getListOfTournaments(1, 10));
// });

//Удаление турнира
router.delete('/:id/del', (req, res) => {
    let tournamentID = Number(req.params.id);
    let deleted = service.tournamentDel(tournamentID);
    res.json(deleted);
});

//Добавление турнира
router.post('/add', (req, res) => {
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
router.put('/:id/edit', (req, res) => {
    let tournamentID = Number(req.params.id);
    let edit = service.tournamentEdit(tournamentID, "Какое-то новое название турнира");
    res.json(edit)
});

module.exports = router;
