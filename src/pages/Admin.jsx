import React from 'react'
import CardListAdmin from '../components/admin/CradListAdmin';
import SearchFilter from '../components/search/SearchFilter';
import InventoryTable from '../components/admin/InventoryTable';
import AddProductForm from '../components/admin/AddProductForm';
import DeleteProduct from '../components/admin/DeleteProduct';


////application start cards is empty
///call api 
////get cards

export default function Admin({cards,setCards,searchQ,setSearchQ,setPricesRange,pricesRange}) {
  const [selected, setSelected] = React.useState([]);


  function deleteProduct(id){
  fetch("http://localhost:8000/products/"+id, {
    method: "DELETE",
    })
  }



  return (
    <>
    <div>
    <h1>Admin</h1>
   {/* <CardListAdmin cards={cards} setCards={setCards} pricesRange={pricesRange} searchQ={searchQ} />
    <SearchFilter searchQ={searchQ} setSearchQ={setSearchQ} pricesRange={pricesRange} setPricesRange={setPricesRange} />*/}


   <InventoryTable rows={cards} selected={selected} setSelected={setSelected} />
  
   <AddProductForm setCards={setCards}/>
   
    <DeleteProduct selected={selected}/>


  </div>
  </>
  )
}
 
