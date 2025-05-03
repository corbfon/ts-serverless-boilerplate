import { Request, Response, NextFunction } from 'express'

const headersMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  let oneof = false

  if (req.headers.origin) {
    res.header('Access-Control-Allow-Origin', req.headers.origin as string)
    res.header('Access-Control-Allow-Credentials', 'true')
    oneof = true
  }

  if (req.headers['access-control-request-method']) {
    res.header('Access-Control-Allow-Methods', req.headers['access-control-request-method'] as string)
    oneof = true
  }

  if (req.headers['access-control-request-headers']) {
    res.header('Access-Control-Allow-Headers', req.headers['access-control-request-headers'] as string)
    oneof = true
  }

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Credentials', 'true')

  next()
}

export default headersMiddleware
