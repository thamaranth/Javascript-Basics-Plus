const express = require('express')
const app = express()
const path = require('path')
// const bodyParser = require('body-parser')
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (request, response) => {
  response.render('index')
})

app.use(express.static(path.join(__dirname , 'public')))

app.use((err, request, response) => {
  throw new Error('Something Broke Dumbass')
})

app.listen(3000)
