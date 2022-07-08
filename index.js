const express = require('express')
const app = express()
const port = 3000

app.use('/', require('./api/user'))

app.post('/tournament/:tournamentId/match/:matchId', require('./api/match'))
app.post('/tournament/:tournamentId/match', require('./api/match'))
app.put('/tournament/:tournamentId/match/:matchId', require('./api/match'))
app.delete('/tournament/:tournamentId/match/:matchId', require('./api/match'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports.app = app;