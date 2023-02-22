import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import {setAllProductsThunk} from './assets/store/slice/products.slice'

function App() {
 
 const {products} = useSelector(state => state)
 const dispatch =  useDispatch()

 useEffect(() => {
   dispatch(setAllProductsThunk())
 }, [])
 

 console.log(products)
  return (
    <div className="App">
      
    </div>
  )
}

export default App
