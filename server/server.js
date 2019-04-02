var methods = require('./methodes')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')


app.use(bodyParser.json())

app.post('/register', methods.register)
app.post('/login' , methods.login)


app.listen(3000 ,()=>{
  console.log('on !')
})





