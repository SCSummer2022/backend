const request = require('supertest');
const assert = require('assert');
const express = require("express")
const app = express()
app.use('/', require('../api/user'))



describe("learners tests", () => {
    it('should return learners Info', async function () {
        let response = await request(app).post('/learners/search');

        assert.equal(response.body[0].id, 1)
    });
    it('should return learners Info', async function () {
        let response = await request(app).post('/learners/search');

        assert.equal(response.body[0].role_id, 1)
    });
    it('should return new Learner Info', async function () {
        let response = await request(app).post('/learners');

        assert.equal(response.body, {
            role_id: 1,
            last_name: 'Кошкин',
            first_name: 'Дмитрий',
            second_name: 'Александрович',
            birthday: '2001-05-13T20:00:00.000Z',
            email: 'demon@mail.ru',
            password: 'YESYESYES',
            city: 1,
            school: 1,
            class: 5,
            fav_sport_types: null
        })
    });
})

describe("teachers tests", () => {
    it('should return teachers Info', async function () {
        let response = await request(app).post('/teachers/search');

        assert.equal(response.body[0].id, 1)
    });
})


