const req = require('supertest');

let app = require('../index.js').app

/**it ('Should return User List', function(done) {
    req(app).post('/').
    expect([{
        id: 4,
        fname: 'Андрей',
        sname: 'Сергеев'
    },

    {
        id: 5,
        fname: 'Ваня',
        sname: 'Андреев'
    },
    null]).end(done)
})**/
it ('Should return User created', function(done) {
    req(app).post('/').
    expect(
    {
        id: 6,
        fname: 'Дима',
        sname: 'Кошкин'
    }).end(done)
})