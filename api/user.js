const express = require('express');
let router = express.Router();

let service = require('../service/user');

//УЧЕНИК
let learnersSearch = async function (req, res) {
    let pageParams = req.query;
    let learnersList = await service.getLearnersInfo(pageParams);
    res.json(learnersList)
}

let learnerAdd = async function (req, res) {
    let learnerParams = req.query;
    let learnerInfo = await service.addNewLearner(learnerParams);
    res.json(learnerInfo)
}

let learnerDelete = async function (req, res) {
    let learnerId = req.params.id;
    let learnerInfo = await service.deleteLearner(learnerId)
    res.json(learnerInfo)
}
let learnerUpdate = async function (req, res) {
    let learnerId = req.params.id;
    let learnerParams = req.query;
    let learnerInfo = await service.updateLearner(learnerId, learnerParams);
    res.json(learnerInfo)
}

//УЧИТЕЛЬ
let teachersSearch = async function (req, res) {
    let pageParams = req.query;
    let teachersList = await service.getTeachersInfo(pageParams);
    res.json(teachersList)
}

let teacherAdd = async function (req, res) {
    let teacherParams = req.query;
    let teacherInfo = await service.addNewTeacher(teacherParams);
    res.json(teacherInfo)
}

//УЧЕНИК
router.post('/learners/search', learnersSearch)
router.post('/learners', learnerAdd)
router.delete('/learners/delete/:id', learnerDelete)
router.put('/learners/update/:id', learnerUpdate)

//УЧИТЕЛЬ
router.post('/teachers/search', teachersSearch)
router.post('/teachers', teacherAdd)

module.exports = router;