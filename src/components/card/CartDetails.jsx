import React from "react";
import { useParams } from "react-router-dom";

const CardDetails = ({ orders }) => {
  const { id } = useParams();

  // Fetch or filter the card data based on the ID from useParams
  const card = {
    id: 2,
    name: "Trippie Tee",
    price: "$35",
    img: "https://i.ibb.co/jvfBFzY/Untitled-2-03.png",
    isAvailable: true,
  };

  // Replace with real data or fetching logic

  return (
    <div>
      <h1>{card.name}</h1>
      <p>{card.price}</p>
      {/* Display the image */}
      <img
        src={card.img}
        alt={card.name}
        style={{
          width: "100%",      // Adjust width to fit the container
          maxWidth: "400px",   // Set a max-width if needed
          height: "auto",      // Maintain aspect ratio
        }}
      />
      <p>Status: {card.isAvailable ? "Available" : "Sold Out"}</p>
      {orders.includes(parseInt(id)) && <p>This item is in your cart.</p>}
    </div>
  );
};

export default CardDetails;
