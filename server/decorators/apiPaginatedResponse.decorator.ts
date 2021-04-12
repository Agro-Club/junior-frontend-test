import { applyDecorators, Type } from '@nestjs/common'
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger'
import { PaginatedResponseDto } from 'dto/paginatedResponse.dto'
import { ApiResponseOptions } from '@nestjs/swagger/dist/decorators/api-response.decorator'

export const ApiPaginatedResponse = <TModel extends Type<any>>(model: TModel, opts?: ApiResponseOptions) => {
  return applyDecorators(
    ApiExtraModels(model),
    ApiOkResponse({
      ...opts,
      schema: {
        allOf: [
          { $ref: getSchemaPath(PaginatedResponseDto) },
          {
            properties: {
              results: {
                type: 'array',
                items: { $ref: getSchemaPath(model) },
              },
            },
          },
        ],
      },
    })
  )
}
