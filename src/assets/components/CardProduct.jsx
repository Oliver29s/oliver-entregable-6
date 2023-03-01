import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardProduct = ({product}) => { 

   const navigate = useNavigate()
  const handleClick = () =>{
    navigate(`/product/${product.id}`)
  }
  return (
    <div onClick={handleClick}>
        <header>
          <img src={product?.images[0].url} alt="" />
        </header>
        <section>
          <header>
            <h3>{product?.brand}</h3>
            <h2>{product?.title}</h2>
          </header>
          <div>
            <div>Price</div>
            <div>{product?.price}</div>
          </div>
          <button>
          <i className='bx bxs-cart-add'></i>
          </button>
        </section>
    </div>
  )
}

export default CardProduct