import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./assets/components/shared/Header";
import HomePage from "./assets/pages/HomePage";
import LoginPage from "./assets/pages/LoginPage";
import ProductPage from "./assets/pages/ProductPage";
import RegisterPage from "./assets/pages/RegisterPage";
import { setAllProductsThunk } from "./assets/store/slice/products.slice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAllProductsThunk());
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
      </Routes>
    </div>
  );
}

export default App;
