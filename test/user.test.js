const request = require('supertest');
const assert = require('assert');
const express = require("express")
const app = express()
app.use('/', require('../api/user'))

let date = new Date(2001, 1, 1)


describe("learners tests", () => {
    it('Вернуть список всех учеников', async function () {
        let page = 2;
        let pageSize = 2;
        let response = await request(app)
            .get(`/learners/search?page=${page}&pageSize=${pageSize}`);

        assert.equal(response.body[1].id, 4)
    });
    it('Вернуть данные нового ученика', async function () {
        let TestLearner = {
            role_id: 1,
            last_name: 'Shibaev',
            first_name: 'Egor',
            second_name: 'Uryevich',
            birthday: new Date(2002, 6, 20),
            email: 'egor@mail.ru',
            password: '12345678',
            city: 1,
            school: 1,
            class: 5,
            fav_sport_types: null
        }
        let response = await request(app)
            .post(`/learners?role_id=${TestLearner.role_id}&last_name=${TestLearner.last_name}&first_name=${TestLearner.first_name}&second_name=${TestLearner.second_name}&birthday=${TestLearner.birthday.toISOString()}&email=${TestLearner.email}&password=${TestLearner.password}&city=${TestLearner.city}&school=${TestLearner.school}&class=${TestLearner.class}&fav_sport_types=${TestLearner.fav_sport_types}`);

        assert.equal(response.body.id, 5)
    })
    it('Вернуть данные удалённого ученика', async function (){
        let response = await request(app).delete('/learners/1')
        assert.equal(response.body.id, 1)
    })
    it('Вернуть изменённые данные ученика', async function (){
        let response = await request(app).put('/learners/2?class=100')
        assert.equal(response.body.class, 100)
    })
})

describe("teachers tests", () => {
    it('Вернуть информацию об учителях', async function () {
        let response = await request(app).get('/teachers/search?page=1&pageSize=1');
        assert.equal(response.body[0].id, 1)
    })
    it('Вернуть информацию о новом учителе', async function () {
        let TestTeacher = {
            role_id: 2,
            last_name: 'Samson',
            first_name: 'Sek',
            second_name: 'Bot',
            birthday: new Date(1977, 3, 15),
            phone_number: '73748378900',
            email: 'ssbot@mail.ru',
            password: 'ksteach93#',
            city: 1,
            school: 5,
            access: true
        }
        let response = await request(app)
            .post(`/teachers?role_id=${TestTeacher.role_id}&last_name=${TestTeacher.last_name}&first_name=${TestTeacher.first_name}&second_name=${TestTeacher.second_name}&birthday=${TestTeacher.birthday.toISOString()}&city=${TestTeacher.city}&school=${TestTeacher.school}&email=${TestTeacher.email}&access=${TestTeacher.access}&password=${TestTeacher.password}`);

        assert.equal(response.body.id, 2)
    })

    it('Вернуть данные удалённого учителя', async function (){
        let response = await request(app).delete('/teachers/1')
        assert.equal(response.body.id, 1)
    })

    it('Вернуть изменённые данные учителя', async function (){
        let response = await request(app).put('/teachers/2?school=100')
        assert.equal(response.body.school, 100)
    })
})

