const express = require('express');
let router = express.Router();

let service = require('../service/user');
const {Learner} = require("../model/user");

let learnersSearch = async function (req, res) {
    let pageParams = req.query;
    let learnersInfo = await service.getLearnersInfo(pageParams);
    res.json(learnersInfo)
}

let teachersSearch = async function (req, res) {
    let teachersInfo = await service.getTeachersInfo();
    res.json(teachersInfo)
}



router.post('/learners/search', learnersSearch)
router.post('/teachers/search', teachersSearch)

module.exports = router;