const express = require('express');
let router = express.Router();

let service = require('../service/tournament');

//Поиск постранично
// router.post('/tournament/search', (req, res) => {
//     res.json(service.getListOfTournaments(1, 10));
// });

//Удаление турнира
// router.delete('/tournament/:id/del', (req, res) => {
//     let tournamentID = req.params.id;
//     let deleted = service.tournamentDel(tournamentID);
//     res.json(deleted);
// });

//Добавление турнира
// router.post('/tournament', (req, res) => {
//     res.json(service.tournamentAdd("Турнир 4"))
// });

//Поиск конкретного турнира
router.get('/tournament/:id', (req, res) => {
    let tournamentID = req.params.id;
    let search = service.tournamentSearch(tournamentID);
    res.json(search);
});

//Редактирование турнира
// router.put('/tournament/:id/edit', (req, res) => {
//     let tournamentID = req.params.id;
//     let edit = service.tournamentEdit(tournamentID, "Какое-то новое название турнира");
//     res.json(edit)
// });

module.exports = router;
