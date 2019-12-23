const types = require('./types/fulfillments')
const { FulfillmentResponsePayloadBuilder } = require('./builders/FulfillmentResponseBuilder')

class FulfillmentManager {
  /**
   * Method to handle a intent
   * @param {import('./types/fulfillments').Intent} intent
   * @param {import('./types/fulfillments').IntentDetails} details 
   */
  handleIntent(intent, details) {
    const { displayName: intentName } = intent

    switch(intentName) {
      case 'identify':
        return this.identify(details)
      default:
        break
    }
  }

  /**
   * handler for intent: "identify"
   * @param {import('./types/fulfillments').IntentDetails} details 
   */
  identify(details) {
    console.log('identify - details', details)
    console.log('output contexts', details.outputContexts)
    return new FulfillmentResponsePayloadBuilder()
      .withFulfillmentText('hi there')
      .withOutputContexts([details.outputContexts[0]])
      .build()
  }
}

FulfillmentManager._sessionManagers = new Map()

module.exports = {
  fulfillmentManager: new FulfillmentManager()
}
