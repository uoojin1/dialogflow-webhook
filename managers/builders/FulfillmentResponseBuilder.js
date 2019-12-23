const responseTempalte = require('../../controllers/res.example.json')

const OUTPUT_CONTEXT_NAME_TEMPLATE = 'projects/${PROJECT_ID}/agent/sessions/${SESSION_ID}/contexts/context name'

class FulfillmentResponsePayloadBuilder {
  constructor(projectId, session) {
    this._projectId = projectId
    this._sessionId = sessionId
    this._response = responseTempalte
    console.log({ res: this._response })
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
  withOutputContexts(allPossibleOutputContexts, targetContextNames) {
    const outputContexts = allPossibleOutputContexts.filter((outputContextCandidate) => {
      return outputContextCandidate.name.some(targetContextNames)
    })
    console.log('@@@ output context', outputContexts)
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
