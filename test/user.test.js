const req = require('supertest');
const model = require("../model/user");
const service = require("../service/user");

let app = require('../index.js').app

it ('Should return User List', function(done) {
    req(app).post('/').
    expect('"Номер страницы и/или размер страницы должны быть положительными!"',
        {
            id: 6,
            fname: 'Дима',
            sname: 'Кошкин'
        }).end(done)
})
it ('Should return User Info', function(done) {
    req(app).get('/').
    expect(
        {
            id: 5,
            fname: 'Ваня',
            sname: 'Андреев'
        }).end(done)
})

it ('Should return user deleted', function(done) {
    req(app).delete('/').expect(200).end(done)

})

it ('Should return user edited', function(done) {
    req(app).put('/').expect(200).end(done)
})