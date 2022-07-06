const express = require('express')
const app = express()
const port = 3000

app.post('/', require('./api/user'))
app.get('/', require('./api/user'))
app.delete('./', require('./api/user'))
app.put('./', require('./api/user'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports.app = app