const request = require('supertest');
const assert = require('assert');
const express = require("express")
const app = express()
app.use('/', require('../api/user'))


describe("users tests", () => {
    it('should return learners Info', async function () {
        let response = await request(app)
            .post('/learners/search');

        assert.equal(response.body[0].id, 1)
    });
})
