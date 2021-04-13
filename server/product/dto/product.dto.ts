import { Product } from 'product/product.types'
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator'
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

  @IsString()
  @ApiProperty({
    description: 'Category type.',
    type: String,
    required: true,
  })
  categoryType: string

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

  @IsNumber()
  @ApiProperty({
    description: 'Product price.',
    type: Number,
    required: true,
  })
  price: number

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'Product discount.',
    type: Number,
    required: false,
    nullable: true,
  })
  discount: number | null
}
