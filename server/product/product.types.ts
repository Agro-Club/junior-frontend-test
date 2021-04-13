export type Product = {
  id: string
  name: string
  description: string
  categoryId: string
  categoryName: string
  categoryType: string
  isLimited: boolean
  isNew: boolean
  price: number
  discount: number | null
}
