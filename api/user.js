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

let createLearner = async function (req, res) {
    let newLearner = {
        role_id: 1,
        last_name: 'Кошкин',
        first_name: 'Дмитрий',
        second_name: 'Александрович',
        birthday: new Date(2002, 6, 20),
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

router.post('/learners/search', learnersSearch)
router.post('/teachers/search', teachersSearch)
router.post('/learners', createLearner)

module.exports = router;