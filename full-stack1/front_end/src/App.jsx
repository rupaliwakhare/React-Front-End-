import React from 'react'
import ProductForm from './components/ProductForm.jsx'
import ProductList from './components/ProductList.jsx'

const App = () => {
  return (
    <div>
      <h1>Axios Product Crud</h1>
      <ProductForm/>
      <ProductList/>
    </div>
  )
}

export default App
