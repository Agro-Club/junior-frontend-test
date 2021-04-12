import { Injectable } from '@nestjs/common'
import { Category } from './category.types'
import { db } from './db'

@Injectable()
export class CategoryService {
  async getList(): Promise<Category[]> {
    return db
  }
}
