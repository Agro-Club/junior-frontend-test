export const ADDRESS = 'http://localhost:4000'

export const getCategories = async () => {
  return await fetch(`${ADDRESS}/api/category`).then(res => res.json())
}

// export const getProducts = async () => {
//   return await fetch(`${ADDRESS}/api/category`).then(res => res.json())
// }
