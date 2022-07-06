const express = require('express');
let router = express.Router();

let service = require('../service/hello');

let handler = async function (req, res) => {
    res.json( await service.getHelloModel())
}

router.get('/', handler)

module.exports = router;
