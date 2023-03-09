import React from 'react'

const PurchaseCard = ({purchase}) => {

   console.log(purchase) 
  return (
    <div>
        <header>
            <img src={purchase.product.images[0].url} alt="imgss" />
        </header>
        <h3>{purchase.product.title}</h3>
        <div>{purchase.quantity}</div>
        <div>{purchase.product.price}</div>
    </div>
  )
}

export default PurchaseCard