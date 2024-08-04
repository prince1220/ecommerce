import "./App.css";
import Card from "./components/card/CardComp.jsx";
import {useState,useEffect} from "react"
import Button from "@mui/material/Button";

import SearchFilter from "./components/search/SearchFilter";
import CardList from "./components/card/CardList";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from "./pages/Cart";
import Navbar2 from "./components/Navbar2";
import Navbar  from "./components/Navbar";
/*
npm install [name]

npm install [extension]




*/

export default function App() {

  
  const [searchQ,setSearchQ]=useState(""); /// input change

  const [cards,setCards] = useState([]) ///loading API
  const [orders,setOrders] = useState([])
  const [pricesRange, setPricesRange] = useState([500,2000]);
  


  useEffect(()=>{
    fetch("https://api.npoint.io/d7f875245ffc9671a617").then(res=>res.json()).then(data=>{
      setCards(data.cards)
      console.log(data.cards);
    })
  },[])

  return (
    <>
  
    <Router>
  <Navbar2 cards={cards} orders= {orders} setOrders={setOrders}/> 
    


      <Routes>

        
      <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About  />} />
        <Route path="/" element={<Home cards={cards} orders={orders} setOrders={setOrders} setSearchQ={searchQ} setPricesRange={setPricesRange} pricesRange={pricesRange} searchQ={searchQ}/>} />
        <Route path="/home" element={<Home cards={cards} orders={orders} setOrders={setOrders} setSearchQ={searchQ} setPricesRange={setPricesRange} pricesRange={pricesRange} searchQ={searchQ}/>} />
       <Route path="/cart" element={<Cart cards={cards} orders={orders} setOrders={setOrders} />}/>

       <Route path="*" element={<>Not found</>} />
     
      </Routes>
    </Router>
    </>
    
  );

  return (
    <main style={{border:"2px solid red",height:"100vh"}}>
    <Navbar cards={cards} orders={orders} setOrders={setOrders}  />  
    
    <div style={{display:"flex",border:"2px solid green",height:"100%"}}>

      <SearchFilter searchQ={searchQ} setSearchQ={setSearchQ} pricesRange={pricesRange} setPricesRange={setPricesRange} />
      <CardList  cards={cards} pricesRange={pricesRange}  searchQ={searchQ} orders={orders} setOrders={setOrders}/>
     
     </div>
    </main>
  );


}


