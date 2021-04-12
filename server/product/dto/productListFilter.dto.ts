import { IsString, IsArray, IsOptional, IsBoolean } from 'class-validator'
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
    title: 'Filter by categories.',
    description: 'List of categories.',
    type: [String],
    required: false,
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  category?: string[]
}
