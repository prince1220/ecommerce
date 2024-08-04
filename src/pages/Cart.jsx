
import React from 'react'

function Cart({cards, orders, setOrders }) {
 
  const isInArray=(arr,id)=>{
    for(let i=0;i<arr.length;i++){
     if(arr[i]==id) return true;
    }
    return false;
  }
  return (
    <>
  
    
     <div>
      {cards.filter(item=>isInArray(orders,item.id)).map(card => (
        <div key={card.id}>
          <h2>{card.name}</h2>
          <p>{card.description}</p>
          <p>{card.price}</p>
          <p>{card.isAvailable === "true" ? "Available" : "Not Available"}</p>
          {/* use setOrders to remove the order from the orders */}
        </div>

      ))}
    </div>
</>
  )
}

export default Cart