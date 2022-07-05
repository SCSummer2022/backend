const express = require('express');
let router = express.Router();

let service = require('../service/user')

router.post('/', (req, res) => {
    res.json(service.getAllUserInfo(-3, 3))
    res.json(service.addNewUser('Дима','Кошкин'))
});

/*router.put('/', (req, res) => {
    res.json(service.editUser(5, "Митя", "Муркин"))
})*/
router.get('/', (req, res) => {
    req.json(service.findUser(5))
})

module.exports = router;