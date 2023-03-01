import { useEffect } from 'react'
import { useDispatch} from 'react-redux'
import { Routes,  Route } from 'react-router-dom'
import './App.css'
import Header from './assets/components/shared/Header'
import HomePage from './assets/pages/HomePage'
import ProductPage from './assets/pages/ProductPage'
import {setAllProductsThunk} from './assets/store/slice/products.slice'


function App() {
 
 
 const dispatch =  useDispatch()

 useEffect(() => {
   dispatch(setAllProductsThunk())
 }, [])
 


 
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/product/:id' element={<ProductPage/>}/>
      </Routes>
    </div>
  )
}

export default App
