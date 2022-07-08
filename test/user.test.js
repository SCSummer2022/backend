const request = require('supertest');
const assert = require('assert');
const express = require("express")
const app = express()
app.use('/', require('../api/user'))



describe("learners tests", () => {
    it('should return learners Info', async function () {
        let response = await request(app).post('/learners/search?page=2&pageSize=2');

        assert.equal(response.body[1].id, 4)
    });
})

describe("teachers tests", () => {
    it('should return teachers Info', async function () {
        let response = await request(app).post('/teachers/search?page=1&pageSize=1');

        assert.equal(response.body[0].id, 1)
    });
})


