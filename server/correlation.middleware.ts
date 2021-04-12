import { Injectable, NestMiddleware } from '@nestjs/common'
import { Request, Response } from 'express'
import * as uuid from 'uuid'
import { CORRELATION_HEADER, CORRELATION_ID_PROP } from './constants/correlationId'

@Injectable()
export class CorrelationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    // eslint-disable-next-line security/detect-object-injection
    let correlationId = req.headers[CORRELATION_HEADER]
    if (!correlationId) {
      correlationId = uuid.v4()
    }
    // eslint-disable-next-line security/detect-object-injection
    req[CORRELATION_ID_PROP] = correlationId
    res.setHeader(CORRELATION_HEADER, correlationId as string)
    next()
  }
}
