const responseTemplate = require('./res.example.json')

class FulfilmentResponseBuilder {
  constructor() {
    this._response = responseTemplate
  }

  withFulfillmentText(fulfillmentText) {
    this._response.fulfillmentText = fulfillmentText
    return this
  }

  withOutputContexts(outputContexts) {
    this._response.outputContexts = outputContexts
    return this
  }

  withFollowupEventInput(followupEventInput) {
    this._response.followupEventInput = followupEventInput
    return this
  }

  build() {
    console.log('## build:', this._response)
    return this._response
  }
}

module.exports = {
  FulfilmentResponseBuilder
}
