import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
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
import canola from './assets/Canola@2x.png'
import barley from './assets/Barley@2x.png'
import corn from './assets/Corn@2x.png'
import oats from './assets/Oats@2x.png'
import soybeans from './assets/Soybeans@2x.png'
import wheat from './assets/Wheat@2x.png'

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin: 20px;
`
const ProductCard = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 8px;
  min-height: 50px;
  max-height: 300px;
  min-width: 200px;
  max-width: 600px;
  background: #ffffff;
  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
`

const HeaderCategoryName = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #a8b8ca;
`
const HeaderProductName = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.96);
`
const HeaderProductDesc = styled.p`
  font-style: normal;
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.96);
`
const HeaderProductPrice = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.96);
`

const HasDiscount = styled.p`
  color: #ff9900;
  font-size: 12px;
  line-height: 16px;
`
const RightColumn = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: min-content;
  padding: 5px;
`
const IsLimited = styled.div`
  background: #e7eef9;
  border-radius: 12px;
  font-weight: 600;
  font-size: 10px;
  line-height: 20px;
  text-align: center;
  color: #889bb1;
  margin: 5px;
`

const IsNew = styled.div`
  background: #e6f5e6;
  border-radius: 12px;
  font-weight: 600;
  font-size: 10px;
  line-height: 20px;
  text-align: center;
  color: #20b02e;
  margin: 5px;
`

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

  const getCategoryImageSrc = ({ categoryName }) => {
    if (categoryName === 'Canola') {
      return canola
    } else if (categoryName === 'Barley') {
      return barley
    } else if (categoryName === 'Corn') {
      return corn
    } else if (categoryName === 'Wheat') {
      return wheat
    } else if (categoryName === 'Oats') {
      return oats
    } else if (categoryName === 'Soybeans') {
      return soybeans
    }
  }

  const getDiscountString = ({ discount }) => {
    if (discount !== null) {
      return `Discount $${discount} per bag`
    } else {
      return ''
    }
  }

  return (
    <>
      <ProductsContainer>
        {products.map(product => {
          return (
            <ProductCard key={product.id}>
              <img style={{ borderRadius: '16px' }} src={getCategoryImageSrc(product)} alt={product.categoryName} />
              <div>
                <HeaderCategoryName>{product.categoryName}</HeaderCategoryName>
                <HeaderProductName>{product.name}</HeaderProductName>
                <HeaderProductDesc>{product.description}</HeaderProductDesc>
                <HeaderProductPrice>{'$' + product.price}</HeaderProductPrice>
                <HasDiscount>{getDiscountString(product)}</HasDiscount>
              </div>
              <RightColumn>
                {product.isLimited && <IsLimited>Limited</IsLimited>}
                {product.isNew && <IsNew>New</IsNew>}
              </RightColumn>
            </ProductCard>
          )
        })}
      </ProductsContainer>
    </>
  )
}
