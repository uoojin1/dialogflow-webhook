const responseTempalte = require('../../controllers/res.example.json')

class FulfillmentResponsePayloadBuilder {
  constructor() {
    this._response = responseTempalte
    console.log({ res: this._response })
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
    return this._response
  }
}

module.exports = {
  FulfillmentResponsePayloadBuilder
}
