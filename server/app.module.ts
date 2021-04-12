import { MiddlewareConsumer, Module, NestModule, ValidationPipe } from '@nestjs/common'
import { LoggerModule } from 'nestjs-pino/dist'
import { CorrelationMiddleware } from 'correlation.middleware'
import { CORRELATION_ID_PROP } from 'constants/correlationId'
import { ConfigModule } from 'config/config.module'
import { ConfigService } from 'config/config.service'
import { APP_PIPE } from '@nestjs/core'
import { CategoryModule } from 'category/category.module'
import { ProductModule } from 'product/product.module'

@Module({
  imports: [
    ConfigModule,
    LoggerModule.forRoot({
      pinoHttp: [
        {
          prettyPrint:
            process.env.NODE_ENV === 'development'
              ? {
                  colorize: true,
                  ignore: 'hostname',
                  translateTime: 'dd/mm/yyyy, HH:MM:ss TT',
                }
              : false,
          genReqId: req => {
            return req[CORRELATION_ID_PROP]
          },
        },
        process.stdout,
      ],
    }),
    CategoryModule,
    ProductModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useFactory: () => new ValidationPipe({ transform: true }),
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
