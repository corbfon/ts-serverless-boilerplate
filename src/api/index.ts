import { Router } from 'express'

const router = Router()

import headersMiddleware from './middleware/headers.js'
router.use(headersMiddleware)

router.use('/ping', async (req, res) => {
  res.status(200).send('pong')
})
router.use('/v1', require('/v1').default)

export default router
