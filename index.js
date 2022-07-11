const express = require('express')
const app = express()
const port = 3000

app.use('/', require('./api/user'))
app.use('/', require('./api/match'))
app.use('/', require('./api/tournament'))
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports.app = app;