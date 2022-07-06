const express = require('express');
let router = express.Router();

let service = require('../service/user')
const model = require("../model/user");
const req = require("supertest");

router.post('/', (req, res) => {
    res.json(service.getAllUserInfo(-1, 3))
    res.json(service.addNewUser('Дима','Кошкин'))
});

router.delete('/', (req, res) => {

    if(model.users[indexId] === undefined){
        return res.status(200).json();
    }
    res.json(service.deleteUser(1))

});

router.put('/', (req, res) => {
    res.json(service.editUser(5, "Митя", "Муркин"))
})
router.get('/', (req, res) => {
    res.json(service.findUser(5))
});

module.exports = router;