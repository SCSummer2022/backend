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

let teacherDelete = async function (req, res) {
    let teacherId = req.params.id;
    let teacherInfo = await service.deleteTeacher(teacherId)
    res.json(teacherInfo)
}

let teacherUpdate = async function (req, res) {
    let teacherId = req.params.id;
    let teacherParams = req.query;
    let teacherInfo = await service.updateTeacher(teacherId, teacherParams);
    res.json(teacherInfo)
}

//УЧЕНИК
router.get('/learners/search', learnersSearch)
router.post('/learners', learnerAdd)
router.delete('/learners/:id', learnerDelete)
router.put('/learners/:id', learnerUpdate)

//УЧИТЕЛЬ
router.get('/teachers/search', teachersSearch)
router.post('/teachers', teacherAdd)
router.delete('/teachers/:id', teacherDelete)
router.put('/teachers/:id', teacherUpdate)

module.exports = router;