import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./assets/components/shared/Header";
import { focusBLur } from "./assets/layout/confi";
import CartPage from "./assets/pages/CartPage";
import HomePage from "./assets/pages/HomePage";
import LoginPage from "./assets/pages/LoginPage";
import ProductPage from "./assets/pages/ProductPage";
import ProtetecRoutes from "./assets/pages/ProtetecRoutes";
import PurchasesPage from "./assets/pages/PurchasesPage";
import RegisterPage from "./assets/pages/RegisterPage";
import { getCartThunk } from "./assets/store/slice/cart.slice";
import { setAllProductsThunk } from "./assets/store/slice/products.slice";

function App() {
  focusBLur();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);


  useEffect(() => {
    dispatch(setAllProductsThunk());
    dispatch(getCartThunk());
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/user">
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
        <Route element={<ProtetecRoutes />}>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/purchases" element={<PurchasesPage/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
