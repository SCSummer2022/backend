const req = require('supertest');

let app = require('../index.js').app

it ('Should return User List', function(done) {
    req(app)
    .post('/user/search')
    .expect('"Номер страницы и/или размер страницы должны быть положительными!"').
    end(done)
})
it ('Should return New User Info', function(done) {
    req(app)
    .post('/user')
    .expect({
            id: 6,
            fname: 'Дима',
            sname: 'Кошкин'
        }).end(done)
})
it ('Should return User Info', function(done) {
    req(app)
    .get('/user/5')
    .expect(
        {
            id: 5,
            fname: 'Ваня',
            sname: 'Андреев'
        }).end(done)
})

it ('Should return user deleted', function(done) {
    req(app)
    .delete('/user/5')
    .expect(200)
    .end(done)
})
it ('Should return edited user', function(done) {
    req(app)
    .put('/user/5')
    .expect({
        id: 5,
        fname: 'Даша',
        sname: 'Рюмина'
    })
    .end(done)
})
