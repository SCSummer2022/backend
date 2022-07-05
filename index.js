const express = require('express')
const app = express()
const port = 3000

app.get('/', require('./api/hello'))
// app.get('/tournaments', require('./api/tournament'))
app.get('/tournaments/delete', require('./api/tournament'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
module.exports = app;