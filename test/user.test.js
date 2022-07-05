const req = require('supertest');

let app = require('../index.js').app

it ('Should return User List', function(done) {
    req(app).post('/').
    expect({users: [{
        id: 1,
        fname: 'Петя',
        sname: 'Иванов'
    },
    {
        id: 2,
        "fname": 'Коля',
        "sname": 'Петров'
    },
    {
        id: 3,
        "fname": 'Серёжа',
        "sname": 'Николаев'
    },
    {
        id: 4,
        "fname": 'Андрей',
        "sname": 'Сергеев'
    },
    {
        id: 5,
        "fname": 'Ваня',
        "sname": 'Андреев'
    }]}).end(done)
})