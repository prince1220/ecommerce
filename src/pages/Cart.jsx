import React from 'react';
import Box from '@mui/material/Box';
import { useCart } from "@reflowhq/cart-react";

import CartView from "@reflowhq/cart-react";
import "@reflowhq/cart-react/dist/style.css";

function Cart({ cards, orders, setOrders }) {
  const isInArray = (arr, id) => {
    return arr.includes(id);
  };

  const config = {
    projectID: "1234",
    localization,
  };
  
  const cart = useCart(config);

  const filteredCards = cards.filter(item => isInArray(orders, item.id));
  const totalAmount = filteredCards.reduce((total, card) => total + parseFloat(card.price), 0);

  return (
    <Box
      display="flex"
      flexDirection="column"
      p={2}
      sx={{ border: 'none', width: '100%' }}
    >
      <h1 style={{ margin: 0, marginBottom: '20px' }}>Cart</h1>

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
      <button onClick={() => cart.addProduct({ id: "5678" })}>Add to cart</button>
    </Box>
  );
}

export default Cart;
