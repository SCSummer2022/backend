const req = require('supertest');

let app = require('../index.js').app

it('should return user Info', function() {
    req(app)
    .post('/user/search')
    .expect({
        id: 1,
        role_id: 'администратор',
        last_name: 'Андреевич',
        first_name: 'Павел',
        second_name: 'Небойков',
        birthday: new Date(2002, 6, 20),
        phone_number: '546789',
        email: 'neboi222@mail.ru',
        password: 'easypeasy'
    })
    .end()
})