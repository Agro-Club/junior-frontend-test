import { Controller, Get } from '@nestjs/common'
import { CategoryService } from 'category/category.service'
import { CategoryDto } from './dto/category.dto'
import { ApiOkResponse } from '@nestjs/swagger'

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get('/')
  @ApiOkResponse({
    description: 'List of available categories',
    type: [CategoryDto],
  })
  async categoryList(): Promise<CategoryDto[]> {
    return this.categoryService.getList()
  }
}
