import React from 'react'
import { FiltersSection } from './FiltersSection'
import { ProductsList } from './ProductsList'
import { ProductsTitle } from './ProductsTitle'

export const ProductsPage = () => {
  return (
    <>
      <ProductsTitle />
      <FiltersSection />
      <ProductsList />
    </>
  )
}
