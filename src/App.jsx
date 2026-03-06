import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

// Material UI Imports
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

// Component & Page Imports
import Navbar2 from "./components/Navbar2";
import Home from './pages/Home';
import Home2 from './pages/Home2'; // Season 2 Page
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Admin from "./pages/Admin";
import Build from "./pages/Build";

export default function App() {
  const [searchQ, setSearchQ] = useState(""); 
  const [cards, setCards] = useState([]);     
  const [orders, setOrders] = useState([]);   
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
        {/* Navbar usually needs these props for the cart badge/logic */}
        <Navbar2 cards={cards} orders={orders} setOrders={setOrders} />

        <Routes>
          {/* Main Home (Season 1) */}
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

          {/* Season 2 Page */}
          <Route path="/season-2" element={
            <Home2
              cards={cards}
              orders={orders}
              setOrders={setOrders}
              searchQ={searchQ}
              setSearchQ={setSearchQ}
              pricesRange={pricesRange}
              setPricesRange={setPricesRange}
            />
          } />

          <Route path="/contact" element={<Contact TextField={TextField} Box={Box} />} />
          <Route path="/about" element={<About />} />
          <Route path="/build" element={<Build cards={cards} orders={orders} setOrders={setOrders} />} />
          
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

          <Route path="/cart" element={
            <Cart cards={cards} orders={orders} setOrders={setOrders} />
          } />

          <Route path="/product/:id" element={
            <Product cards={cards} orders={orders} setOrders={setOrders} />
          } />

          <Route path="*" element={<Box sx={{ p: 5, textAlign: 'center' }}>404_NOT_FOUND</Box>} />
        </Routes>
      </Router>
    </>
  );
}