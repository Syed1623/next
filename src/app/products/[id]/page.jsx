import React from 'react'

const ProductsDetails = ({params}) => {
  console.log(params)
  return (
    <div>
      <h1>product {params.id}</h1>
    </div>
  )
}

export default ProductsDetails
