import React from "react";
import "./index.css";
// import Header from "./components/layout/Header";
// import Footer from "./components/layout/Footer";
import Layout from "./components/layout/Layout";
import Login from "./components/page/Login";
import Cart from "./components/common/Cart";
import ProductDescription from "./components/page/ProductDescription";
import Cartpage from "./components/cartpage/Cartpage";
import Products from "./components/products/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                {/* <Header /> */}
                {/* <Footer /> */}
                <Layout />
              </>
            }
          ></Route>
          {/* <Route path="/header" exact element={<Header />}></Route> */}
          {/* <Route path="/footer" exact element={<Footer />}></Route> */}
          <Route path="/layout" exact element={<Layout />}></Route>
          <Route path="/products" exact element={<Products />}></Route>
          <Route path="/details" exact element={<ProductDescription />}></Route>

          <Route path="/login" exact element={<Login />}></Route>
          <Route path="/cart" exact element={<Cart />}></Route>
          <Route path="/cartpage" exact element={<Cartpage />}></Route>

          {/* <Header /> */}
          {/* <Footer /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
