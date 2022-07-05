const express = require('express');
let router = express.Router();

let service = require('../service/user')

router.post('/', (req, res) => {
    res.json(service.getAllUserInfo())
});

module.exports = router;