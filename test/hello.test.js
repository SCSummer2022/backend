const request = require('supertest')
const express = require("express")
const app = express()

app.get('/', require('../api/hello'))

it('api\\hello.js', (done) => {
    request(app).get('/').expect({
        message: {
            txt: "hello world!!!"
        }
    }).end(done)
})