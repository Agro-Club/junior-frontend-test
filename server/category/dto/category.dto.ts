import { IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { Category } from 'category/category.types'

export class CategoryDto implements Category {
  @IsString()
  @ApiProperty({
    description: 'Category ID.',
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
}
