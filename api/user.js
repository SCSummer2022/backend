const express = require('express');
let router = express.Router();

let service = require('../service/user')

router.post('/user/search', (req, res) => {
    res.json(service.getAllUserInfo(-1, 3))
});

router.post('/user', (req, res) => {
    res.json(service.addNewUser('Дима','Кошкин'))
});

router.delete('/user/:id', (req, res) => {
    let userId = req.params.id;
    let deleted = service.deleteUser(userId);
    res.json(deleted)
});

router.get('/user/:id', (req, res) => {
    let userId = req.params.id;
    let finded = service.findUser(userId);
    res.json(finded)
});

router.put('/user/:id', (req, res) => {
    let userId = req.params.id;
    let edited = service.editUser(userId, "Даша", "Рюмина");
    res.json(finded)
});

module.exports = router;