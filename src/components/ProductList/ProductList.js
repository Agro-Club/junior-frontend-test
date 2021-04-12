import { useCallback, useReducer } from 'react'
import styles from './ProductList.module.scss'
import { useEffect } from 'react'

const initialState = {
  filter: {
    isNew: false,
    category: [],
  },
  status: 'idle', // idle | work | success | error
  items: [],
}

const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case 'filter:change': {
      return {
        ...state,
        status: 'work',
        filter: {
          ...state.filter,
          ...action.payload,
        },
      }
    }
    case 'filter:reset': {
      return {
        ...state,
        status: 'work',
        filter: {
          ...state.filter,
          ...initialState.filter,
        },
      }
    }
    case 'request': {
      return {
        ...state,
        status: 'work',
        filter: {
          ...state.filter,
          ...action.payload,
        },
      }
    }
    case 'request:success': {
      return {
        ...state,
        status: 'success',
        items: action.payload,
      }
    }
    case 'request:error': {
      return {
        ...state,
        status: 'error',
      }
    }
  }
}

const useProductList = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const getList = useCallback((filter = {}) => dispatch({ type: 'request', payload: filter }), [])
  const updateFilter = useCallback((filter = {}) => dispatch({ type: 'filter:change', payload: filter }), [])
  const resetFilter = useCallback(() => dispatch({ type: 'filter:reset' }), [])

  useEffect(() => {
    // prettier-ignore
    const serializeFilter = filter => [
      ...filter.category.map(categoryId => `category[]=${categoryId}`),
      `isNew=${filter.isNew}`
    ].join('&')

    fetch(`/api/product?${serializeFilter(state.filter)}`)
      .then(res => {
        if (res.ok && res.status === 200) {
          res.json().then(data => dispatch({ type: 'request:success', payload: data.results }))
        } else {
          dispatch({ type: 'request:error' })
        }
      })
      .catch(err => {
        console.error(err)
        dispatch({ type: 'request:error' })
      })
  }, [state.filter])

  return {
    ...state,
    getList,
    updateFilter,
    resetFilter,
  }
}

const ProductList = () => {
  const { items, status, updateFilter, filter } = useProductList()

  return (
    <div className={styles.root}>
      <div className={styles.filtersContainer}>
        <label htmlFor="is_new">Is new</label>
        <input
          id="is_new"
          type="checkbox"
          onChange={() => updateFilter({ isNew: !filter.isNew })}
          checked={filter.isNew}
        />
      </div>
      <div>Status: {status}</div>
      <div className={styles.itemsContainer}>
        {items.map(item => (
          <div className={styles.productContainer} key={item.id}>
            <div>Name: {item.name}</div>
            <div>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
