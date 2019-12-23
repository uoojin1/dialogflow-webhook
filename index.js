const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const { fulfillmentController } = require('./controllers/fulfillmentController')

const app = express()
const port = process.env.PORT || 5000

// add logging middleware
app.use(morgan())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// the api endpoint to serve fulfillment requests from the dialogflow agent
app.post('/fulfillment', fulfillmentController)

app.listen(port, () => console.log(`Nascent-escaperoom webhook listening on port ${port}!`))
