const express = require('express')
const app = express()
const port = 3000

app.use('/tournament', require('./api/tournament'))



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
module.exports = app;