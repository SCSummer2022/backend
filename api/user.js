const express = require('express');
let router = express.Router();

let service = require('../service/user');

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

let newLearner = async function (req, res) {
    let learnerParams = req.query;
    let learnerInfo = await service.addNewLearner(learnerParams);
    res.json(learnerInfo)
}

let learnerDelete = async function (req, res) {
    let learnerId = req.params.id;
    let learnerInfo = await service.deleteLearner(learnerId)
    res.json(learnerInfo)
}



router.post('/learners/search', learnersSearch)
router.post('/teachers/search', teachersSearch)
router.post('/learners', newLearner)
router.delete('/learners/delete/:id', learnerDelete)

module.exports = router;