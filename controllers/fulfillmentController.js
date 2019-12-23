const { fulfillmentManager } = require('../managers/FulfillmentManager')

async function fulfillmentController(req, res) {
  const {
    session,
    queryResult: {
      parameters,
      outputContexts,
      intent
    }
  } = req.body

  const response = await fulfillmentManager.handleIntent(intent, {
    session,
    parameters,
    outputContexts
  })

  res.json(response)
}

module.exports = {
  fulfillmentController
}
