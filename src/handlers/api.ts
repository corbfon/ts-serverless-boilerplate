import serverless from 'serverless-http'
import express from 'express'

const app = express()
const api = serverless(app)

app.get('/ping', (req, res) => {
  res.status(200).send({ message: 'pong' })
})
app.use('/api', require('../api/v1').default)

const handler: serverless.Handler = async (event, context) => {
  return api(event, context)
}

module.exports = { handler }
