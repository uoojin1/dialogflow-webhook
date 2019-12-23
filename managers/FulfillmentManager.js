require('./types/fulfillments')
const { FulfillmentResponsePayloadBuilder } = require('./builders/FulfillmentResponseBuilder')

class FulfillmentManager {
  /**
   * Method to handle a intent
   * @param {Intent} intent 
   * @param {IntentDetails} details 
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

  identify(details) {
    console.log('identify - details', details)
    return new FulfillmentResponsePayloadBuilder()
      .withFulfillmentText('hi there')
      .build()
  }
}

FulfillmentManager._sessionManagers = new Map()

module.exports = {
  fulfillmentManager: new FulfillmentManager()
}