import { useEffect } from 'react'
import { useDispatch} from 'react-redux'
import { Routes,  Route } from 'react-router-dom'
import './App.css'
import Home from './assets/pages/Home'
import {setAllProductsThunk} from './assets/store/slice/products.slice'


function App() {
 
 
 const dispatch =  useDispatch()

 useEffect(() => {
   dispatch(setAllProductsThunk())
 }, [])
 


 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
