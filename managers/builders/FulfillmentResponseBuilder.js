const responseTempalte = require('../../controllers/res.example.json')

class FulfillmentResponsePayloadBuilder {
  constructor() {
    this._response = responseTempalte
  }

  withFulfillmentText(fulfillmentText) {
    this._response.fulfillmentText = fulfillmentText
    return this
  }

  /**
   * Filters out the wanted output contexts based on the 'targetContextNames'
   * @param {import('../types/fulfillments').OutputContext[]} allPossibleOutputContexts 
   * @param {string[]} targetContextNames 
   */
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
  FulfillmentResponsePayloadBuilder
}
