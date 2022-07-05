const express = require('express');
let router = express.Router();

let service = require('../service/hello');

router.get('/', (req, res) => {
    res.json(service.getHelloModel())
})

module.exports = router;
