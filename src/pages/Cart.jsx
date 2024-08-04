
import React from 'react'

function Cart({cards, orders, setOrders }) {
  console.log (orders)
  return (
    <>
    <h1>Orders</h1>
   <div>{orders.map(item=><h1>{item}</h1>)}</div>

    <h1>Cards</h1>
    
     <div>
      {cards.map(card => (
        <div key={card.id}>
          <h2>{card.name}</h2>
          <p>{card.description}</p>
          <p>{card.price}</p>
          <p>{card.isAvailable === "true" ? "Available" : "Not Available"}</p>
        </div>

      ))}
    </div>
</>
  )
}

export default Cart