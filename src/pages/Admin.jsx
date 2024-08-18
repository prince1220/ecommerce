import React from 'react'
import CardList from '../components/card/CardList';
import SearchFilter from '../components/search/SearchFilter';

export default function Admin({cards,orders,setOrders,searchQ,setSearchQ,setPricesRange,pricesRange}) {
  return (
    <>
    <div>Admin</div>
    <div>
    <h1>Home Page</h1>
    <p>Welcome to the home page!</p>
    <CardList cards={cards} orders={orders} setOrders={setOrders} pricesRange={pricesRange} searchQ={searchQ} />
    <SearchFilter searchQ={searchQ} setSearchQ={setSearchQ} pricesRange={pricesRange} setPricesRange={setPricesRange} />
   
  </div>
  </>
  )
}
 
