import { Product } from 'product/product.types'
import { IsBoolean, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class ProductDto implements Product {
  @IsString()
  @ApiProperty({
    description: 'Product ID.',
    type: String,
    required: true,
  })
  id: string
  @IsString()
  @ApiProperty({
    description: 'Product name.',
    type: String,
    required: true,
  })
  name: string
  @IsString()
  @ApiProperty({
    description: 'Product description.',
    type: String,
    required: true,
  })
  description: string
  @IsString()
  @ApiProperty({
    description: 'Category ID.',
    type: String,
    required: true,
  })
  categoryId: string
  @IsString()
  @ApiProperty({
    description: 'Category name.',
    type: String,
    required: true,
  })
  categoryName: string

  @IsBoolean()
  @ApiProperty({
    description: 'Is product limited.',
    type: Boolean,
    required: true,
  })
  isLimited: boolean
  @IsBoolean()
  @ApiProperty({
    description: 'Is product new.',
    type: Boolean,
    required: true,
  })
  isNew: boolean
}
