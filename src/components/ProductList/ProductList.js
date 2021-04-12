import styles from './ProductList.module.scss'
import { useProductList } from './useProductList'

const ProductList = () => {
  const { items, filter, status, updateFilter } = useProductList()
  return (
    <div className={styles.root}>
      <div className={styles.filtersContainer}>
        <div>Filters</div>
        <div>
          <label htmlFor="is_new">Is new</label>
          <input
            id="is_new"
            type="checkbox"
            onChange={() => updateFilter({ isNew: !filter.isNew })}
            checked={filter.isNew}
          />
        </div>
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
