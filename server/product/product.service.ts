import { Injectable } from '@nestjs/common'
import { Product } from './product.types'
import { db } from 'product/db'

@Injectable()
export class ProductService {
  async getList({
    isLimited = false,
    isNew = false,
    category = [],
    page,
    pageSize,
  }: {
    isLimited?: boolean
    isNew?: boolean
    category?: string[]
    page: number
    pageSize: number
  }): Promise<{
    total: number
    results: Product[]
  }> {
    const results = db.filter(
      p =>
        (category.length ? category.some(c => c === p.categoryId) : true) &&
        (isLimited ? p.isLimited === true : true) &&
        (isNew ? p.isNew === true : true)
    )
    return {
      total: results.length,
      results: results.slice((page - 1) * pageSize, page * pageSize),
    }
  }
}
