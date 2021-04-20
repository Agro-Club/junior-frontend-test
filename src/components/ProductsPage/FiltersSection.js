import React from 'react'
import { CategoryList } from './CategoryList'
import { StatusSection } from './StatusSection'

export const FiltersSection = () => {
  return (
    <>
      <div>
        <h3>Filters</h3>
        <CategoryList />
        <StatusSection />
      </div>
    </>
  )
}
