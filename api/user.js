const express = require('express');
let router = express.Router();

let service = require('../service/user');
const {Learner} = require("../model/user");

let learnersSearch = async function (req, res) {
    let pageParams = req.query;
    let learnersList = await service.getLearnersInfo(pageParams);
    res.json(learnersList)
}

let teachersSearch = async function (req, res) {
    let pageParams = req.query;
    let teachersList = await service.getTeachersInfo(pageParams);
    res.json(teachersList)
}



router.post('/learners/search', learnersSearch)
router.post('/teachers/search', teachersSearch)

module.exports = router;