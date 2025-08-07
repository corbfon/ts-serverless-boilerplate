import { Router } from 'express'
import v1 from './v1'

const router = Router()

import headersMiddleware from './middleware/headers.js'
router.use(headersMiddleware)

router.use('/v1', v1)

export default router
