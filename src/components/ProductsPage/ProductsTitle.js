import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { getSearchString, setSearchString } from '../state'

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

  return (
    <>
      <div>
        <h1>Products</h1>
        <form onChange={onChange} register={register}>
          <input id="search" type="text" value={searchString} placeholder="Search among products" />
        </form>
      </div>
    </>
  )
}
