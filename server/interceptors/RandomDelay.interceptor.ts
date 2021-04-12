import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common'
import { Observable } from 'rxjs'
import { delay } from 'rxjs/operators'

const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)
@Injectable()
export class RandomDelayInterceptor implements NestInterceptor {
  private readonly delay: { min: number; max: number }
  constructor(delay: { min: number; max: number }) {
    this.delay = delay
  }
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const delayMs = rand(this.delay.min, this.delay.max)
    return next.handle().pipe(delay(delayMs))
  }
}
