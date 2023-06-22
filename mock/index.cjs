const express = require('express')

const a = require('./user.cjs')
console.log(a)

const app = express()
const port = 3000
app.listen(port, () => console.log('mock server starting. port: ' + port))
