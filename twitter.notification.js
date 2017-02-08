var Twit = require('twit')

var T = new Twit({
  consumer_key:         'wim5mQ1XMCRMPKEx3ZM5TrzGs',
  consumer_secret:      'BVkM1Xu4I5Y2kBw5cXpUHHU1etMOZf9GnB7OYsSqsZY1TWGCdj',
  access_token:         '829348278831607808-cwpPFwYnyheJ9jhqzlxA2DOiGnw6abL',
  access_token_secret:  'qWkKcccYrE5TuI8OU0lLqbiRTEWvHb9RFWK3mdMq4dfkp',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

//  tweet 'hello world!'
T.post('statuses/update', { status: 'Look, freeCodeCamp (http://gittrends.io/#/repos/freeCodeCamp/freeCodeCamp) just achieved 230,000 stars!' }, function(err, data, response) {
  console.log(data)
})
