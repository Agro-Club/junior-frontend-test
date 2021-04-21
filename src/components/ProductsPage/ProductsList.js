import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  PRODUCTS_ERROR,
  PRODUCTS_LOADING,
  getProductsStatus,
  fetchProducts,
  getSelectedCategories,
  getIsNew,
  getIsLimited,
  getSearchString,
  getProducts,
} from '../state'

export const ProductsList = () => {
  const dispatch = useDispatch()

  const status = useSelector(getProductsStatus)
  const category = useSelector(getSelectedCategories)
  const isNew = useSelector(getIsNew)
  const isLimited = useSelector(getIsLimited)
  const search = useSelector(getSearchString)
  const products = useSelector(getProducts)

  useEffect(() => {
    dispatch(fetchProducts({ isNew, isLimited, category, search }))
  }, [dispatch, category, isLimited, isNew, search])

  if (status === PRODUCTS_LOADING) {
    return <>Loading...</>
  } else if (status === PRODUCTS_ERROR) {
    return <>Error...</>
  }
  console.log(products)
  return (
    <>
      <div>
        {products.map(product => {
          return (
            <div key={product.id}>
              <p>{product.categoryName}</p>
              <p>{product.name}</p>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}
