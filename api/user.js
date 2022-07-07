const express = require('express');
let router = express.Router();

let service = require('../service/user');

let handler = async function (req, res) {
    let learnersInfo = await service.getLearnersInfo();
    res.json(learnersInfo)
}

let handlerTeach = async function (req, res) {
    let teachersInfo = await service.getTeachersInfo();
    res.json(teachersInfo)
}

router.post('/learners/search', handler)
router.post('/teachers/search', handlerTeach)

module.exports = router;