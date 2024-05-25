import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Test = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProductDB()

  }, [])

  const getProductDB = async()=>{
    const res = await axios.get(`${import.meta.env.VITE_PRODUCTS_MICROSERVICE}/products`)
    setProducts(res.data)
    // setProducts()
  }
  
  return (
    <div>
      {products.map(product=>(<div key={product.id}>
        <p>{product.name}</p>
        <p>{product.rarity}</p>
      </div>))}
    </div>
  )
}

export default Test