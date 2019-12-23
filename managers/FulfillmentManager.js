const { FulfillmentResponseBuilder } = require('./FulfillmentResponseBuilder')

class FulfillmentManager {
  /**
   * Method to handle a intent
   * @param {import('./types/fulfillments').Intent} intent
   * @param {import('./types/fulfillments').IntentDetails} details 
   */
  handleIntent(intent, details) {
    // parse to select the right handler
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
    const {
      parameters: {
        person: { name }
      },
      outputContexts
    } = details

    let fulfillmentText;
    let outputContext;

    if (name.toLowercase === 'rex') {
      outputContext = outputContexts.find((context) => {
        return context.name.includes('/contexts/code-green')
      })
      fulfillmentText = 'Good day, Captain.'
    }

    else {
      outputContext = outputContexts.find((context) => {
        return context.name.includes('/contexts/code-green')
      })
      fulfillmentText = 'Unauthorized individual detected. Activating code red.'
    }

    const responsePayload = new FulfillmentResponsePayloadBuilder()
      .withFulfillmentText(fulfillmentText)
      .withOutputContexts([outputContext])
      .build()

    return responsePayload
  }
}

FulfillmentManager._sessionManagers = new Map()

module.exports = {
  fulfillmentManager: new FulfillmentManager()
}
