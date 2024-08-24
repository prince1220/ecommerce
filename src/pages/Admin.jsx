import React from 'react'
import CardListAdmin from '../components/admin/CradListAdmin';
import SearchFilter from '../components/search/SearchFilter';

export default function Admin({cards,setCards,searchQ,setSearchQ,setPricesRange,pricesRange}) {
  return (
    <>
    <div>
    <h1>Admin</h1>
    <CardListAdmin cards={cards} setCards={setCards} pricesRange={pricesRange} searchQ={searchQ} />
    <SearchFilter searchQ={searchQ} setSearchQ={setSearchQ} pricesRange={pricesRange} setPricesRange={setPricesRange} />
   
  </div>
  </>
  )
}
 
