const express = require('express');
let router = express.Router();

let service = require('../service/user');
const {Learner} = require("../model/user");

let learnersSearch = async function (req, res) {
    let learnersInfo = await service.getLearnersInfo();
    res.json(learnersInfo)
}

let teachersSearch = async function (req, res) {
    let teachersInfo = await service.getTeachersInfo();
    res.json(teachersInfo)
}

let createLearner = async function (req, res) {
    let newLearner = {
        role_id: 1,
        last_name: 'Кошкин',
        first_name: 'Дмитрий',
        second_name: 'Александрович',
        birthday: new Date(2002, 6, 20),
        phone_number: null,
        email: 'demon@mail.ru',
        password: 'YESYESYES',
        city: 1,
        school: 1,
        class: 5,
        fav_sport_types: null
    }
    let learnerInfo = await service.createNewLearner(newLearner);
    res.json(learnerInfo)
}

let deleteLearner = async function (req, res) {
    let learnerForDelete = Learner.findByPk(2)
    let learnerInfo = await service.deleteLearner(learnerForDelete, 2);
    res.json(learnerInfo)
}



router.post('/learners/search', learnersSearch)
router.post('/teachers/search', teachersSearch)
router.post('/learners', createLearner)
router.post('/learners/delete', deleteLearner)

module.exports = router;