// src/pages/Home.js
import React from 'react';
import CardList from '../components/card/CardList';
import SearchFilter from '../components/search/SearchFilter';



function Home({cards,orders,setOrders,searchQ,setSearchQ,setPricesRange,pricesRange}) {
  
  return (
    <div>
      <CardList cards={cards} orders={orders} setOrders={setOrders} pricesRange={pricesRange} searchQ={searchQ} />
      <SearchFilter searchQ={searchQ} setSearchQ={setSearchQ} pricesRange={pricesRange} setPricesRange={setPricesRange} />
      
    </div>
  );
}

export default Home;
