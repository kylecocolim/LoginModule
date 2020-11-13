const express = require('express')
const dotenv = require('dotenv')
// APP CONFIG
dotenv.config()
const app = express()
const PORT = process.env.PORT || 4000
const morgan = require('morgan')
const bodyParser = require('body-parser')

app.use(morgan())
app.use(bodyParser())
app.get('/', (req, res, next) => {
    res.send('Hi')
})

app.listen(PORT, () => {
    console.log(`Operation On ${PORT}`)
})
