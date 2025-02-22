import React from 'react'
import { useGetAllProductsQuery } from '../app/service/dummyData'

const AllProducts = () => {
    const {data, isError, isLoading} = useGetAllProductsQuery()
  
  if (isLoading) return <p>Loading...</p>
  
    return (
    <div>AllProducts
        {isError && <p>Error :(</p>}
        {data && data.products.map(product => (
            <div key={product.id}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>Price: {product.price}</p>
            </div>
        ))}

    </div>
  )
}

export default AllProducts