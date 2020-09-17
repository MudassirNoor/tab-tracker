const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

//'status' endpoint
app.get('/status', (req, res) => { //Get request to a 'status' endpoint, here get is the method being called
  res.send({
    message: 'hello world!'
  })
})

//'register' endpoint
app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email}! Your user was registered! Have fun!`
  })
})

//Try entering localhost:8081/status in the browser
app.listen(process.env.PORT || 8081)
