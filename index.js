const express = require('express')
const app = express()
const port = 3000
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./docs/swagger_output.json')

app.use('/', require('./api/user'))
app.use('/', require('./api/match'))
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports.app = app;