import React from 'react'
import { CategoryList } from './CategoryList'
import { StatusSection } from './StatusSection'
import styled from 'styled-components'

const FiltersContainer = styled.div`
  display: grid;
  margin: 20px;
  padding: 0 20px 20px 20px;
  background: #ffffff;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
`
const DivForFilters = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 24px;
`

export const FiltersSection = () => {
  return (
    <>
      <FiltersContainer>
        <h3 style={{ color: '#037BFF' }}>Filters</h3>
        <DivForFilters>
          <CategoryList />
          <StatusSection />
        </DivForFilters>
      </FiltersContainer>
    </>
  )
}
