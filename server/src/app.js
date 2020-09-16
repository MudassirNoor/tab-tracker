const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => { //Get request to a 'status' endpoint, here get is the method being called
  res.send({
    message: 'hello world!'
  })
})

//Try entering localhost:8081/status in the browser
app.listen(process.env.PORT || 8081)
