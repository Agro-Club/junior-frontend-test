import { Query, Controller, Get } from '@nestjs/common'
import { ProductService } from 'product/product.service'
import { ProductListFilterDto } from 'product/dto/productListFilter.dto'
import { ProductDto } from 'product/dto/product.dto'
import { ApiPaginatedResponse } from 'decorators/apiPaginatedResponse.decorator'
import { PaginatedResponseDto } from 'dto/paginatedResponse.dto'

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  @ApiPaginatedResponse(ProductDto, { description: 'List of products.' })
  async getProductList(@Query() query: ProductListFilterDto): Promise<PaginatedResponseDto<ProductDto>> {
    const data = await this.productService.getList(query)
    return {
      page: query.page,
      pageSize: query.pageSize,
      results: data.results,
      total: data.total,
    }
  }
}
