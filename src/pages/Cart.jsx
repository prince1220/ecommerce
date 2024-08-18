import React from 'react';
import Box from '@mui/material/Box';

function Cart({ cards, orders, setOrders }) {
  const isInArray = (arr, id) => {
    return arr.includes(id);
  };

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

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        gap={2}
      >
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
          sx={{ width: '60%' }}
        >
          {filteredCards.map(card => (
            <Box 
              key={card.id} 
              p={2} 
              sx={{ 
                border: '1px solid grey', 
                width: '100%', 
                borderRadius: '8px' // Rounded corners
              }}
            >
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                  <h2>{card.name}</h2>
                  <p>{card.description}</p>
                  <p>{card.price}</p>
                  <p>{card.isAvailable === "true" ? "Available" : "Not Available"}</p>
                </Box>
                <button onClick={() => setOrders(orders.filter(orderId => orderId !== card.id))}>
                  Remove from Cart
                </button>
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          p={2}
          sx={{
            border: '1px solid grey',
            width: '35%',
            textAlign: 'center',
            alignSelf: 'flex-start',
            borderRadius: '8px' // Rounded corners
          }}
        >
          <h3>Order Summary</h3>
          <p>Total Items: {filteredCards.length}</p>
          <p>Total Price: ${totalAmount.toFixed(2)}</p>
        </Box>
      </Box>
    </Box>
  );
}

export default Cart;
