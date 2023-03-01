import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from '../components/ProductsPage/ProductInfo'
import SimilarProducts from '../components/ProductsPage/SimilarProducts'

const ProductPage = () => {
  const {id} =  useParams()
  const [product, setProduct] = useState()

  useEffect(() => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}
    `
    axios
    .get(url)
    .then(res => setProduct(res.data))
    .catch(err => console.log(err))
  }, [id])
  
  return (
    <div className='info__main'>
        <ProductInfo product={product}/>
        <SimilarProducts categories={product?.categoryId}
        productId ={product?.id}
        />
    </div>
  )
}

export default ProductPage