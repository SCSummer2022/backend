const express = require('express');
let page = -3;
let pageSize = 3;
let router = express.Router();

let service = require('../service/user')

router.post('/', (req, res) => {
    res.json(service.getAllUserInfo(page, pageSize))
    res.json(service.addNewUser('Дима','Кошкин'))
});

router.delete('/', (req, res) => {
    res.json(service.deleteUser(1))
});

/*router.put('/', (req, res) => {
    res.json(service.editUser(5, "Митя", "Муркин"))
})*/
router.get('/', (req, res) => {
    req.json(service.findUser(5))
})

module.exports = router;