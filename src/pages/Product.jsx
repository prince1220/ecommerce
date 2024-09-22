import React from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from "@mui/material/Button";

import ReactProductSlider from "react-product-slider";


const currencies = [
  { value: 'small', label: 'S' },
  { value: 'medium', label: 'M' },
  { value: 'large', label: 'L' },
  { value: 'xlarge', label: 'XL' },
];

const items = [
  {
    src: "https://farm3.staticflickr.com/2877/9011629527_5c8af0d5ec_b.jpg",
    alt: "slide",
    thumbnail: "https://farm3.staticflickr.com/2877/9011629527_5c8af0d5ec_b.jpg",
  },
  {
    src: "https://i.redd.it/vbp0ere319za1.jpg",
    
    alt: "slide",
    thumbnail: "https://i.redd.it/vbp0ere319za1.jpg",
  },
  {
    src: "https://thirdeyemom.com/wp-content/uploads/2017/08/img_2197.jpg",
    
    alt: "slide",
    thumbnail: "https://thirdeyemom.com/wp-content/uploads/2017/08/img_2197.jpg",
  },
];

//https://thirdeyemom.com/wp-content/uploads/2017/08/img_2197.jpg

export default function Product({ cards, setOrders, orders }) {
  const { id } = useParams();

  if (!cards) {
    return <div>Getting product details</div>;
  }

  const product = cards.find(el => el.id == id);

  if (!product) {
    return <div>Product not found</div>;
  }

  let isInCart = orders.find(item => item === id) !== undefined;
  let isAvailable = true; // You can modify this based on actual availability logic



  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Box
        component="form"
        sx={{
          fontFamily: "'Source Code Pro Variable', monospace",
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { sm: 'flex-start' },
          justifyContent: 'space-between',
          paddingTop: '100px',
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        {/* Image Column */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '40px',
            maxWidth: '400px',
          }}
        >
           <ReactProductSlider reverse={true} items={items} />
        </Box>

        {/* Product Details and Form */}
        <Box
          sx={{
            fontFamily: 'Source Code Pro, monospace',
            flexGrow: 1,
            marginLeft: { sm: '100px' },
          }}
        >
          <h1 style={{ marginBottom: '40px' }}>{product.name}</h1>
          <p style={{ marginBottom: '40px', fontWeight: 400 }}>{product.price}</p>
          <p style={{ marginBottom: '40px', fontWeight: 400 }}>{product.discription1}</p>
          <p style={{ marginBottom: '40px', fontWeight: 400 }}>{product.discription2}</p>
          <p style={{ marginBottom: '40px', fontWeight: 400 }}>{product.discription3}</p>
          <p style={{ marginBottom: '40px', fontWeight: 400 }}>{product.discription4}</p>

          {/* TextField components */}
          <div style={{ marginBottom: '16px' }}>
            <TextField
              id="outlined-select-currency"
              select
              label="Size"
              defaultValue="small"
              helperText="Please select your size"
            >
              {currencies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>

          {/* Conditional Button Rendering */}
          {isAvailable && !isInCart && (
            <Button
            onClick={() => {
              setOrders((old_orders) => {
                if (old_orders.find((item) => item === id)) {
                  return old_orders;
                } else {
                  return [...old_orders, id];
                }
              });
            }}
            color="warning"
            variant="contained"
            size="small"
            sx={{
              fontFamily: "'Source Code Pro Variable', monospace",
              backgroundColor: '#FFFFFF', // Background color
              color: '#757575', // Text color
              border: '1px solid #757575', // Outline color and thickness
              '&:hover': {
                backgroundColor: '#FAFAFA', // Lighter background shade on hover
                color: '#FAFAFA', // Text color on hover
                borderColor: '#757575', // Darker outline on hover
              },
            }}
          >
            Add to Cart
          </Button>
          )}

          {isAvailable && isInCart && (
            <Button
              onClick={() => {
                setOrders((old_orders) => {
                  return old_orders.filter((item) => item !== id);
                });
              }}
              color="info"
              variant="contained"
              size="small"
            >
              Remove
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
}
