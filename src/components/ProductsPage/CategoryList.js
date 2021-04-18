import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories, removeSelectedCategory, addSelectedCategory, getSelectedCategories } from '../state'
import { CATEGORIES_ERROR, CATEGORIES_LOADING } from '../state/categories/categories'
import { getCategories, getCategoriesStatus } from '../state/categories/selectors'

export const CategoryList = () => {
  const dispatch = useDispatch()

  const status = useSelector(getCategoriesStatus)
  const categories = useSelector(getCategories)
  const selectedCategories = useSelector(getSelectedCategories)

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  if (status === CATEGORIES_LOADING) {
    return <>Loading...</>
  } else if (status === CATEGORIES_ERROR) {
    return <>Error...</>
  }

  const onCategoryClick = ({ id }) => {
    if (selectedCategories.indexOf(id) !== -1) {
      dispatch(removeSelectedCategory({ category: id }))
    } else {
      dispatch(addSelectedCategory({ category: id }))
    }
  }

  const getButtonColor = ({ id }) => {
    if (selectedCategories.indexOf(id) !== -1) {
      return '#037BFF'
    } else {
      return 'white'
    }
  }

  return (
    <div>
      {categories.map(category => {
        return (
          <button
            style={{ backgroundColor: getButtonColor(category) }}
            onClick={() => onCategoryClick(category)}
            key={category.id}
          >
            {category.name}
          </button>
        )
      })}
    </div>
  )
}
