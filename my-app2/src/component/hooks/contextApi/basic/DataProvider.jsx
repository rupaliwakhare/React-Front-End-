import React from 'react'
// import  { Children } from 'react'
import MyContext from './MyContext'

const DataProvider = ({children}) => {
    const name = "Anandi"
    const cart = "2345"
  return (
    <MyContext.Provider value={name} cart={cart}>
        {children}

    </MyContext.Provider>
  )
}

export default DataProvider
