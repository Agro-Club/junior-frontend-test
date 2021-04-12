import { Injectable } from '@nestjs/common'
import { Product } from './product.types'
import { db } from 'product/db'

const escapeRx = /[|\\{}()[\]^$+*?.]/g

@Injectable()
export class ProductService {
  async getList({
    isLimited = false,
    isNew = false,
    category = [],
    search,
    page,
    pageSize,
  }: {
    isLimited?: boolean
    isNew?: boolean
    category?: string[]
    search?: string
    page: number
    pageSize: number
  }): Promise<{
    total: number
    results: Product[]
  }> {
    const searchRx = search ? new RegExp(search.replace(escapeRx, '\\$&'), 'i') : null
    const results = db.filter(
      p =>
        (searchRx ? searchRx.test(p.name) || searchRx.test(p.description) : true) &&
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
