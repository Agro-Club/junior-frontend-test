import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {
  fetchCategories,
  removeSelectedCategory,
  addSelectedCategory,
  getSelectedCategories,
  clearSelectedCategories,
} from '../state'
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

  const isCategoryActive = ({ id }) => {
    return selectedCategories.indexOf(id) !== -1
  }

  const isAllCategoriesActive = () => {
    return selectedCategories.length === 0
  }

  const onAllButtonClick = () => {
    dispatch(clearSelectedCategories())
  }

  const FiltersLabel = styled.p`
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
    color: #a8b8ca;
  `
  const Button = styled.button`
    border-color: #037bff;
    border-width: thin;
    border-radius: 8px;
    margin-right: 10px;
    padding: 3px 17px;
    color: ${props => (props.activated ? '#FFFFFF' : '#037bff')};
    background-color: ${props => (props.activated ? '#037bff' : '#FFFFFF')};
  `
  return (
    <div>
      <FiltersLabel>Category</FiltersLabel>
      <Button activated={isAllCategoriesActive()} onClick={onAllButtonClick}>
        All
      </Button>
      {categories.map(category => {
        return (
          <Button activated={isCategoryActive(category)} onClick={() => onCategoryClick(category)} key={category.id}>
            {category.name}
          </Button>
        )
      })}
    </div>
  )
}
