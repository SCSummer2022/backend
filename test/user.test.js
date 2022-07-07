const req = require('supertest');

let app = require('../index.js').app

it('should return user Info', function(done) {
    req(app)
    .post('/user/search')
    .expect({
        id: 1,
        role_id: 'Ученик',
        last_name: 'Андреевич',
        first_name: 'Павел',
        second_name: 'Небойков',
        birthday: new Date(2002, 6, 20),
        phone_number: '546789',
        email: 'neboi222@mail.ru',
        password: 'easypeasy',
        city: 'Москва',
        school: '144',
        class: '5'
    },
    {
        id: 1,
        role_id: 'Учитель',
        last_name: 'Самсонович',
        first_name: 'Секулай',
        second_name: 'Ботвинюк',
        birthday: new Date(1977, 3, 15),
        phone_number: '+73748378900',
        email: 'ssbot@mail.ru',
        password: 'ksteach93#',
        city: 'Антоновка',
        school: '1',
        access: true
    })
    .end(done)
})
it('should return user Info', function(done) {
    req(app)
    .post('/user/search')
    .expect("поехали")
    .end(done)
})