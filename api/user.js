const express = require('express');
let router = express.Router();

let service = require('../service/user');

let learnersSearch = async function (req, res) {
    let learnersInfo = await service.getLearnersInfo();
    res.json(learnersInfo)
}

let teachersSearch = async function (req, res) {
    let teachersInfo = await service.getTeachersInfo();
    res.json(teachersInfo)
}

router.post('/learners/search', learnersSearch)
router.post('/teachers/search', teachersSearch)

module.exports = router;