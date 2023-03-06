import React from 'react'

const CartItem = ({car,carTwo}) => {
  return (
    <section>
        <header>
            <img src={car.images[0].url} alt="" />
        </header>
        <main>
            <h2>{car.brand}</h2>
            <h3>{car.title}</h3>
            <ul>
                <li>
                    <span>Unit Price</span>
                    <span>{car.price}</span>
                </li>
                <li>
                    <span>Quantity</span>
                    <span>{carTwo.quantity}</span>

                </li>
            </ul>
        </main>
    </section>
  )
}

export default CartItem