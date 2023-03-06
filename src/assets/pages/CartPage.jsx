import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartPage/CartItem'

const CartPage = () => {
  const {cart} = useSelector(state => state)
  return (
    <div>
        {
            cart?.map( car => (
               <CartItem key={car.id} car ={car.product} carTwo={car}/>
            ))
        }
    </div>
  )
}

export default CartPage