const express = require('express');
let page = 2;
let pageSize = 3;
let router = express.Router();

let service = require('../service/user')

router.post('/', (req, res) => {
    //res.json(service.getAllUserInfo(page, pageSize))
    res.json(service.addNewUser('Дима','Кошкин'))
});

module.exports = router;