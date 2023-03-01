import React from 'react'
import { useNavigate } from 'react-router-dom'
import './shared/styles/cardProducts.css'

const CardProduct = ({product}) => { 

   const navigate = useNavigate()
  const handleClick = () =>{
    navigate(`/product/${product.id}`)
  }
  return (
    <div onClick={handleClick} className="card__contain">
        <header>
          <img src={product?.images[0].url} alt="" />
        </header>
        <section>
          <header>
            <h3  className='card__ligth'>{product?.brand}</h3>
            <h2 className='card__bold'>{product?.title}</h2>
          </header>
          <div>
            <div className='card__ligth'>Price</div>
            <div className='card__bold prices'>{product?.price}</div>
          </div>
          <button>
          <i className='bx bxs-cart-add'></i>
          </button>
        </section>
    </div>
  )
}

export default CardProduct