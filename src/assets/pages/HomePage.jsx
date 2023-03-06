import React from 'react'
import { useSelector } from 'react-redux'
import CardProduct from '../components/CardProduct'

const HomePage = () => {
    const {products} = useSelector(state => state)
  return (
    
        <div className='card__main'>
            {
                products?.map( product =>(
                    <CardProduct 
                    key={product.id}
                    product={product}
                    
                    />
                ))
            }
        </div>
    
  )
}

export default HomePage