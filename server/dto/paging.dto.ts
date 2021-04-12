import { IsOptional, IsInt } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { Transform } from 'class-transformer'

export class PagingLimitOffsetDto {
  @ApiProperty({
    description: 'Paging offset',
    required: false,
  })
  @IsOptional()
  @IsInt()
  @Transform(({ value }) => parseInt(value, 10))
  offset?: number

  @ApiProperty({
    description: 'Paging limit',
    required: false,
  })
  @IsOptional()
  @IsInt()
  @Transform(({ value }) => parseInt(value, 10))
  limit?: number
}

export class PagingDto {
  @ApiProperty({
    description: 'Page number',
    required: false,
    default: 1,
  })
  @IsOptional()
  @IsInt()
  @Transform(({ value }) => parseInt(value, 10))
  page: number = 1

  @ApiProperty({
    description: 'Page size',
    required: false,
    default: 10,
  })
  @IsOptional()
  @IsInt()
  @Transform(({ value }) => parseInt(value, 10))
  pageSize: number = 10
}
