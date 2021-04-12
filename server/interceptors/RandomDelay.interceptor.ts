import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common'
import { Observable } from 'rxjs'
import { delay } from 'rxjs/operators'

@Injectable()
export class RandomDelayInterceptor implements NestInterceptor {
  private readonly delay: { min: number; max: number }
  constructor(delay: { min: number; max: number }) {
    this.delay = delay
  }
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const delayMs = Math.floor(Math.random() * (this.delay.max - this.delay.min + 1) + this.delay.min)
    return next.handle().pipe(delay(delayMs))
  }
}
