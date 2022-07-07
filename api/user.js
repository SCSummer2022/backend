const express = require('express');
let router = express.Router();

let service = require('../service/user');

let handler = async function (req, res) {
    let usersInfo = await service.getUsersInfo();
    res.json(usersInfo)
}

router.post('/user/search', handler)

let handler1 = async function (req, res) {
    let newUser = await service.addNewUser();
    res.json(newUser)
}

module.exports = router;