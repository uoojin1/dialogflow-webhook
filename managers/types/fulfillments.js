/**
 * @typedef Intent
 * @type {object}
 * @property {string} name full intent URI
 * @property {string} displayName name of the intent
 */

/**
 * @typedef OutputContext
 * @type {object}
 * @property {string} name full context URI
 * @property {number} lifespanCount lifespan of this context
 * @property {object} parameters
 */

/**
 * @typedef IntentDetails
 * @type {object}
 * @property {string} responseId the response Id
 * @property {string} session the session URI
 * @property {object} parameters the extracted parameters
 * @property {OutputContext[]} outputContexts
 */

module.exports = {}