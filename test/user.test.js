const req = require('supertest');

let app = require('../index.js').app

/*it ('Should return User List', function(done) {
    req(app).post('/').
    expect('"Номер страницы и/или размер страницы должны быть положительными!"',
    {
        id: 6,
        fname: 'Дима',
        sname: 'Кошкин'
    }).end(done)
})*/

it ('Should return user deleted', function(done) {
    req(app).delete('/').expect(200).end(done)
})