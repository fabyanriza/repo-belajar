const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const response = require('./response')
const db = require('./database')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('hello world!')
})

app.get('/hello', (req, res) => {
    console.log({urlParam : req.query.semester})
    res.send('halo berhasil masuk ke sini')
})

app.post('/login', (req, res) => {
    console.log({ requestFromOutside : req.body })
    res.send('login berhasil!')
})

app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`)
})