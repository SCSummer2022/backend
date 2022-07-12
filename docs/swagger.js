const swaggerAutogen = require('swagger-autogen')()

const outputFile = './docs/swagger_output.json'
const userAPI = ['./api/user','./api/match']

swaggerAutogen(outputFile, userAPI)