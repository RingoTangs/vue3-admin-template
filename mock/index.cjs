const express = require('express')
const bodyParser = require('body-parser')

const user = require('./user.cjs')

const app = express()
const cors = require('cors')
app.use(cors())
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


user(app)

const port = 3000
app.listen(port, () => console.log(`mock server starting. port: ${port}.`))
