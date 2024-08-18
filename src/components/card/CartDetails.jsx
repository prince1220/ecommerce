import React from "react";
import { useParams } from "react-router-dom";


const CardDetails = ({ orders }) => {
  const { id } = useParams();
  
  // Fetch or filter the card data based on the ID from useParams
  const card = {
    id: 1,
    name: "Art Deco",
    description: "Oil Paint",
    price: "$1000",
    isAvailable: true,
  };
  
  // Replace with real data or fetching logic
  
  return (
    <div>
      <h1>{card.name}</h1>
      <p>{card.description}</p>
      <p>{card.price}</p>
      <p>Status: {card.isAvailable ? "Available" : "Sold Out"}</p>
      {orders.includes(parseInt(id)) && <p>This item is in your cart.</p>}
    </div>
  );
};

export default CardDetails;