import React from 'react'
import { FiltersSection } from './FiltersSection'
import { ProductsList } from './ProductsList'
import { ProductsTitle } from './ProductsTitle'
import styled from 'styled-components'

const RootContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-auto-columns: 1fr;
  background: #f2f2f2;
`

export const ProductsPage = () => {
  return (
    <RootContainer>
      <ProductsTitle />
      <FiltersSection />
      <ProductsList />
    </RootContainer>
  )
}
