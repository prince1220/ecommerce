import React from 'react';
import Box from '@mui/material/Box';
import { useCart } from "@reflowhq/cart-react";
import CartView from "@reflowhq/cart-react";
import "@reflowhq/cart-react/dist/style.css";
import { useState } from 'react';
const isInArray = (arr, id) => {
  return arr.includes(id);
};

const config = {
  projectID: "1472176007",
};

function Cart({ cards, orders, setOrders }) {

  
  const cart = useCart(config);

  const filteredCards = cards.filter(item => isInArray(orders, item.id));
  const totalAmount = filteredCards.reduce((total, card) => total + parseFloat(card.price), 0);

  return (
    <Box
    display="flex"
    flexDirection="column"
    p={2}
    sx={{
      border: 'none',
      width: '100%', // Full width of the page
      maxWidth: '900px', // Set a max-width to center it better
      paddingLeft: '5px',  // Padding on the left
      paddingRight: '5px', // Padding on the right
      position: 'fixed',   // Make the container fixed to the page
      top: 100,              // Align to the top of the page
      left: '50%',         // Center horizontally
      transform: 'translateX(-50%)', // Proper centering using transform
      fontFamily: "'Source Code Pro Variable', monospace",
      zIndex: 1000,        // Ensure it's above other content if needed
    }}
  >
  
      <h1 style={{ textAlign: 'center', margin: 0, marginBottom: '20px' }}>
        CART
      </h1>

      {/* CartView */}
      <CartView
        cart={cart}
        successURL={"https://i.ibb.co/7XwHMJW/Untitled-2-01.png"}
        cancelURL={"https://i.ibb.co/TwCSxF5/WORKS-Product-Shots-3.png"}
        onMessage={(message) => {
          console.log(message.type, message.title, message.description);
        }}
      />

      {/* Add product to cart for testing */}
      {/* <button onClick={() => cart.addProduct({ id: "1404857296" })}>Add to cart</button> */}
    </Box>
  );
}

export default Cart;
