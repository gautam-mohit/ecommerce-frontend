import React from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Login from "./components/page/Login";
import Cart from "./components/common/Cart";
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
                <Header />
                <Footer />
              </>
            }
          ></Route>
          <Route path="/header" exact element={<Header />}></Route>
          <Route path="/footer" exact element={<Footer />}></Route>
          <Route path="/login" exact element={<Login />}></Route>
          <Route path="/cart" exact element={<Cart />}></Route>
          {/* <Header /> */}
          {/* <Footer /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
