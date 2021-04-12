import { IsString, IsArray, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { PagingDto } from 'dto/paging.dto'
import { BooleanString } from 'transformers/BooleanString'

export class ProductListFilterDto extends PagingDto {
  @ApiProperty({
    description: 'Is product new.',
    type: Boolean,
    required: false,
  })
  @IsOptional()
  @BooleanString()
  isNew?: boolean

  @ApiProperty({
    description: 'Is product limited.',
    type: Boolean,
    required: false,
  })
  @IsOptional()
  @BooleanString()
  isLimited?: boolean

  @ApiProperty({
    description: 'Filter by categories.',
    type: [String],
    required: false,
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  category?: string[]

  @ApiProperty({
    description: 'Search products by text in product name or description.',
    type: String,
    required: false,
  })
  @IsOptional()
  @IsString()
  search?: string
}
