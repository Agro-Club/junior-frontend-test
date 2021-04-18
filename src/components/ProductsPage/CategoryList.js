import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../state'
import { CATEGORIES_ERROR, CATEGORIES_LOADING } from '../state/categories/categories'
import { getCategories, getCategoriesStatus } from '../state/categories/selectors'

export const CategoryList = () => {
  const dispatch = useDispatch()

  const status = useSelector(getCategoriesStatus)
  const categories = useSelector(getCategories)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  if (status === CATEGORIES_LOADING) {
    return <>Loading...</>
  } else if (status === CATEGORIES_ERROR) {
    return <>Error...</>
  }
  return (
    <div>
      {categories.map(category => {
        return <button key={category.id}>{category.name}</button>
      })}
    </div>
  )
}
