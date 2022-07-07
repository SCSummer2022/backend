const express = require('express');
let router = express.Router();

let service = require('../service/user');

let handler = async function (req, res) {
    let usersInfo = await service.getAllUsersInfo();
    res.json(usersInfo)
}

router.post('/user/search', handler)

module.exports = router;