import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  InternalServerErrorException,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

@Injectable()
export class RandomErrorInterceptor implements NestInterceptor {
  private readonly ratio: number
  constructor(options: { ratio: number }) {
    this.ratio = options.ratio
  }
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap(() => {
        if (Math.random() < this.ratio) {
          throw new InternalServerErrorException()
        }
      })
    )
  }
}
