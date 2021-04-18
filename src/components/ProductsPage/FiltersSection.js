import React from 'react'
import { CategoryList } from './CategoryList'

export const FiltersSection = () => {
  return (
    <>
      <div>
        <h3>Filters</h3>
        <p>Category</p>
        <CategoryList />

        <p>Status</p>
        <div>
          <label htmlFor="is_limited">Limited</label>
          <input id="is_limited" type="checkbox" />

          <label htmlFor="is_new">New</label>
          <input id="is_new" type="checkbox" />
        </div>
      </div>
    </>
  )
}
