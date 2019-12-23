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

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/fulfillment', fulfillmentController)

// app.post('/fulfillment', function(req, res) {
//   console.log("request body")
//   console.dir(req.body, { depth: null })
//   res.sendStatus(200)
// })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
