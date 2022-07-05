const express = require('express');
let router = express.Router();

let service = require('../services/user')

router.post('/', (req, res) => {
    res.json(service.getAllUserInfo())
});