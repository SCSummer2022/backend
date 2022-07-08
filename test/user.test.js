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
        .post(`/learners/search?page=${page}&pageSize=${pageSize}`);

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
        let response = await request(app).delete('/learners/delete/1')
        assert.equal(response.body.id, 1)
    })
})

describe("teachers tests", () => {
    it('should return teachers Info', async function () {
        let response = await request(app).post('/teachers/search?page=1&pageSize=1');

        assert.equal(response.body[0].id, 1)
    });
})


