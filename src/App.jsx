import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

import Navbar2 from "./components/Navbar2";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Admin from "./pages/Admin";
import Build from "./pages/Build";



export default function App() {
  const [searchQ, setSearchQ] = useState(""); // input change
  const [cards, setCards] = useState([]);     // loading API
  const [orders, setOrders] = useState([]);   // cart orders
  const [pricesRange, setPricesRange] = useState([-100, 100000]);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then(res => res.json())
      .then(data => {
        setCards(data);
        console.log("Fetched data:", data);
      });
  }, []);

  return (
    <>
      <TawkMessengerReact
        propertyId="6727f8b82480f5b4f598264f"
        widgetId="1ibq27407"
      />

      <Router>
        <Navbar2 cards={cards} orders={orders} setOrders={setOrders} />

        <Routes>
          <Route path="/contact" element={<Contact TextField={TextField} Box={Box} />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin" element={
            <Admin
              cards={cards}
              setCards={setCards}
              searchQ={searchQ}
              setSearchQ={setSearchQ}
              pricesRange={pricesRange}
              setPricesRange={setPricesRange}
            />
          } />
          <Route path="/" element={
            <Home
              cards={cards}
              orders={orders}
              setOrders={setOrders}
              searchQ={searchQ}
              setSearchQ={setSearchQ}
              pricesRange={pricesRange}
              setPricesRange={setPricesRange}
            />
          } />
          <Route path="/home" element={
            <Home
              cards={cards}
              orders={orders}
              setOrders={setOrders}
              searchQ={searchQ}
              setSearchQ={setSearchQ}
              pricesRange={pricesRange}
              setPricesRange={setPricesRange}
            />
          } />
          <Route path="/cart" element={
            <Cart cards={cards} orders={orders} setOrders={setOrders} />
          } />
          <Route path="/product/:id" element={
            <Product cards={cards} orders={orders} setOrders={setOrders} />
          } />
          <Route path="/build" element={
            <Build cards={cards} orders={orders} setOrders={setOrders} />
          } />
          <Route path="*" element={<>Not found</>} />
        </Routes>
      </Router>
    </>
  );
}
