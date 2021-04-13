import { MiddlewareConsumer, Module, NestModule, ValidationPipe } from '@nestjs/common'
import { CorrelationMiddleware } from 'correlation.middleware'
import { ConfigModule } from 'config/config.module'
import { ConfigService } from 'config/config.service'
import { APP_PIPE, APP_INTERCEPTOR } from '@nestjs/core'
import { CategoryModule } from 'category/category.module'
import { ProductModule } from 'product/product.module'
import { RandomDelayInterceptor } from 'interceptors/RandomDelay.interceptor'
import { RandomErrorInterceptor } from 'interceptors/RandomError.interceptor'

@Module({
  imports: [ConfigModule, CategoryModule, ProductModule],
  providers: [
    {
      provide: APP_PIPE,
      useFactory: () => new ValidationPipe({ transform: true }),
    },
    {
      provide: APP_INTERCEPTOR,
      useFactory: () => new RandomDelayInterceptor({ min: 0, max: 1000 }),
    },
    {
      provide: APP_INTERCEPTOR,
      useFactory: () => new RandomErrorInterceptor({ ratio: 0.1 }),
    },
  ],
})
export class AppModule implements NestModule {
  public readonly port: number
  constructor(private config: ConfigService) {
    this.port = parseInt(config.getValue('app:port'), 10)
    if (!this.port) {
      throw new Error('Application port not specified or value is invalid, check API_APP__PORT env variable.')
    }
  }
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CorrelationMiddleware).forRoutes('*')
  }
}
