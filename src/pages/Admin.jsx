import React from 'react'
import CardListAdmin from '../components/admin/CradListAdmin';
import SearchFilter from '../components/search/SearchFilter';
import InventoryTable from '../components/admin/InventoryTable';
import AddProductForm from '../components/admin/AddProductForm';



////application start cards is empty
///call api 
////get cards

export default function Admin({cards,setCards,searchQ,setSearchQ,setPricesRange,pricesRange}) {
  const [selected, setSelected] = React.useState([]);

  return (
    <>
    <div>
    <h1>Admin</h1>
   {/* <CardListAdmin cards={cards} setCards={setCards} pricesRange={pricesRange} searchQ={searchQ} />
    <SearchFilter searchQ={searchQ} setSearchQ={setSearchQ} pricesRange={pricesRange} setPricesRange={setPricesRange} />*/}


   <InventoryTable rows={cards} selected={selected} setSelected={setSelected} />
   <AddProductForm setCards={setCards}/>

   <button onClick={()=>{
    setCards(old=>{
      return old.filter(item=>selected.includes(item)==false)
    })
   }}>Delete select</button>
  </div>
  </>
  )
}
 
