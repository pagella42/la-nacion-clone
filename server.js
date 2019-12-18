
let express = require('express')
let app = express()
let bodyParser = require("body-parser")
let api = require('./server/routes/api')
// const path = require('path')

// app.use(express.static(path.join(__dirname, '/')))

 app.use(bodyParser.urlencoded({ extended: false }))
 app.use(bodyParser.json())
 app.use('/', api)



//allow foregin requests (ONLY FOR DEV MODE)
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

  next()
})








app.listen(5000)