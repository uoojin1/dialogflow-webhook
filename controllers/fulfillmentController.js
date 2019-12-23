const { fulfillmentManager } = require('../managers/FulfillmentManager')

async function fulfillmentController(req, res) {
  const {
    // responseId,
    session,
    queryResult: {
      queryText,
      action,
      parameters,
      // fulfillmentText,
      // fulfillmentMessages,
      outputContexts,
      intent,
      languageCode
    }
  } = req.body

  const response = await fulfillmentManager.handleIntent(intent, {
    session,
    parameters,
    outputContexts
  })

  console.log('\n\nresponse', response)
  console.log('\n\n ---- fulfillment ----')
  console.log({ queryText })
  console.log({ action })
  console.log({ parameters })
  console.dir(outputContexts)
  console.log({ intent })
  console.log({ languageCode })
  console.log({ session })
  console.log('\n\n ---- done ----')

  // response needs to follow a specific format
  res.json(response)
}

module.exports = {
  fulfillmentController
}

/**
 * 2019-12-23T02:19:26.695513+00:00 app[web.1]: request body
2019-12-23T02:19:26.699851+00:00 app[web.1]: { responseId: '185c3bab-b22d-4644-8feb-760b84e41466-b4ef8d5f',
2019-12-23T02:19:26.699855+00:00 app[web.1]:   queryResult:
2019-12-23T02:19:26.699858+00:00 app[web.1]:    { queryText: "i'm Eugene",
2019-12-23T02:19:26.699860+00:00 app[web.1]:      action: 'initialencounter.initialencounter-custom',
2019-12-23T02:19:26.699863+00:00 app[web.1]:      parameters: { person: { name: 'Eugene' } },
2019-12-23T02:19:26.699866+00:00 app[web.1]:      allRequiredParamsPresent: true,
2019-12-23T02:19:26.699868+00:00 app[web.1]:      fulfillmentText: 'Hi Eugene',
2019-12-23T02:19:26.699871+00:00 app[web.1]:      fulfillmentMessages: [ { text: { text: [ 'Hi Eugene' ] } } ],
2019-12-23T02:19:26.699873+00:00 app[web.1]:      outputContexts:
2019-12-23T02:19:26.699875+00:00 app[web.1]:       [ { name:
2019-12-23T02:19:26.699878+00:00 app[web.1]:            'projects/nascent-escape-room/agent/sessions/6a559468-4660-3c9b-5bdc-26eb065a297f/contexts/code-red',
2019-12-23T02:19:26.699880+00:00 app[web.1]:           lifespanCount: 5,
2019-12-23T02:19:26.699882+00:00 app[web.1]:           parameters: { person: { name: 'Eugene' }, 'person.original': 'Eugene' } },
2019-12-23T02:19:26.699884+00:00 app[web.1]:         { name:
2019-12-23T02:19:26.699885+00:00 app[web.1]:            'projects/nascent-escape-room/agent/sessions/6a559468-4660-3c9b-5bdc-26eb065a297f/contexts/code-blue',
2019-12-23T02:19:26.699887+00:00 app[web.1]:           lifespanCount: 5,
2019-12-23T02:19:26.699888+00:00 app[web.1]:           parameters: { person: { name: 'Eugene' }, 'person.original': 'Eugene' } },
2019-12-23T02:19:26.699890+00:00 app[web.1]:         { name:
2019-12-23T02:19:26.699891+00:00 app[web.1]:            'projects/nascent-escape-room/agent/sessions/6a559468-4660-3c9b-5bdc-26eb065a297f/contexts/code-green',
2019-12-23T02:19:26.699893+00:00 app[web.1]:           lifespanCount: 5,
2019-12-23T02:19:26.699894+00:00 app[web.1]:           parameters: { person: { name: 'Eugene' }, 'person.original': 'Eugene' } },
2019-12-23T02:19:26.699896+00:00 app[web.1]:         { name:
2019-12-23T02:19:26.699897+00:00 app[web.1]:            'projects/nascent-escape-room/agent/sessions/6a559468-4660-3c9b-5bdc-26eb065a297f/contexts/identification',
2019-12-23T02:19:26.699899+00:00 app[web.1]:           lifespanCount: 3,
2019-12-23T02:19:26.699900+00:00 app[web.1]:           parameters: { person: { name: 'Eugene' }, 'person.original': 'Eugene' } },
2019-12-23T02:19:26.699902+00:00 app[web.1]:         { name:
2019-12-23T02:19:26.699904+00:00 app[web.1]:            'projects/nascent-escape-room/agent/sessions/6a559468-4660-3c9b-5bdc-26eb065a297f/contexts/initialencounter-followup',
2019-12-23T02:19:26.699905+00:00 app[web.1]:           parameters: { person: { name: 'Eugene' }, 'person.original': 'Eugene' } },
2019-12-23T02:19:26.699906+00:00 app[web.1]:         { name:
2019-12-23T02:19:26.699908+00:00 app[web.1]:            'projects/nascent-escape-room/agent/sessions/6a559468-4660-3c9b-5bdc-26eb065a297f/contexts/__system_counters__',
2019-12-23T02:19:26.699910+00:00 app[web.1]:           parameters:
2019-12-23T02:19:26.699911+00:00 app[web.1]:            { 'no-input': 0,
2019-12-23T02:19:26.699913+00:00 app[web.1]:              'no-match': 0,
2019-12-23T02:19:26.699914+00:00 app[web.1]:              person: { name: 'Eugene' },
2019-12-23T02:19:26.699915+00:00 app[web.1]:              'person.original': 'Eugene' } } ],
2019-12-23T02:19:26.699917+00:00 app[web.1]:      intent:
2019-12-23T02:19:26.699919+00:00 app[web.1]:       { name:
2019-12-23T02:19:26.699921+00:00 app[web.1]:          'projects/nascent-escape-room/agent/intents/b6bbfb0f-5686-4f2b-b761-e7c9f7bd502a',
2019-12-23T02:19:26.699923+00:00 app[web.1]:         displayName: 'identify' },
2019-12-23T02:19:26.699925+00:00 app[web.1]:      intentDetectionConfidence: 1,
2019-12-23T02:19:26.699926+00:00 app[web.1]:      languageCode: 'en' },
2019-12-23T02:19:26.699930+00:00 app[web.1]:   originalDetectIntentRequest: { payload: {} },
2019-12-23T02:19:26.699932+00:00 app[web.1]:   session:
2019-12-23T02:19:26.699934+00:00 app[web.1]:    'projects/nascent-escape-room/agent/sessions/6a559468-4660-3c9b-5bdc-26eb065a297f' }
 */