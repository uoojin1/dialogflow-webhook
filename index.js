const express = require('express')
const morgan = require('morgan')

const app = express()
const port = process.env.PORT || 5000

// add logging middleware
app.use(morgan())

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/fulfillment', function(req, res) {
  console.log("request body\n\n", req.body)
  res.sendStatus(200)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
