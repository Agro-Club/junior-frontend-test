var qs = require('qs')
export const ADDRESS = 'http://localhost:4000'

export const getCategories = async () => {
  return await fetch(`${ADDRESS}/api/category`).then(res => res.json())
}

export const getProducts = async (isNew, isLimited, category, search) => {
  const queryParams = qs.stringify({ isNew, isLimited, category, search }, { arrayFormat: 'indices' })

  return await fetch(`${ADDRESS}/api/product?${queryParams}`).then(res => res.json())
}
