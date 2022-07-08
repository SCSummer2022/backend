const request = require('supertest');
const assert = require('assert');
const express = require("express")
const app = express()
app.use('/', require('../api/user'))



describe("learners tests", () => {
    it('should return learners Info', async function () {
        let response = await request(app).post('/learners/search?page=1&pageSize=3');

        assert.equal(response.body, 1)
    });
})

describe("teachers tests", () => {
    it('should return teachers Info', async function () {
        let response = await request(app).post('/teachers/search');

        assert.equal(response.body[0].id, 1)
    });
})


