import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  InternalServerErrorException,
} from '@nestjs/common'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)
const errorTexts = [
  '🔥Fire in the data center🔥',
  'Yet another "successful" deploy 🙄',
  'SEGFAULT',
  'It never happened before',
  'It worked on my machine!',
  "java.lang.NullPointerException: Attempt to invoke virtual method 'com.bestappever.Controller.doZBS()' on a null object reference ...",
]

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
          throw new InternalServerErrorException(errorTexts[rand(0, errorTexts.length - 1)])
        }
      })
    )
  }
}
