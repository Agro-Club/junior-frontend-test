import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchString, setSearchString } from '../state'
import styled from 'styled-components'

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  background: #ffffff;
  margin: 0px 0px;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.08);
`

const PageName = styled.h1`
  margin: 20px;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
`

const InputSearch = styled.input`
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 8px;
  width: 331px;
  height: 40px;
  margin: 20px;
  vertical-align: baseline;
`

export const ProductsTitle = () => {
  const { register, watch } = useForm()
  const dispatch = useDispatch()
  const watchAllFields = watch()

  const searchString = useSelector(getSearchString)

  const onChange = () => {
    if (watchAllFields !== undefined) {
      dispatch(setSearchString({ searchString: watchAllFields.search }))
    }
  }

  const onSubmit = event => {
    event.preventDefault()
  }

  return (
    <>
      <TitleContainer>
        <PageName>Products</PageName>
        <form onChange={onChange} onSubmit={onSubmit}>
          <InputSearch
            {...register('search')}
            type="text"
            defaultValue={searchString}
            placeholder="Search among products"
          />
        </form>
      </TitleContainer>
    </>
  )
}
