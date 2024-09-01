import React from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

export default function Product({ cards, setOrders, orders }) {
  const { id } = useParams();

  if (!cards) {
    return <div>Getting product details</div>;
  }

  const product = cards.find(el => el.id == id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }, // Stack column on small screens, row on larger screens
        alignItems: { sm: 'flex-start' }, // Align items to the start on larger screens
        justifyContent: 'space-between', // Space out the image column and the other content
        '& .MuiTextField-root': { m: 1, width: '25ch' }
      }}
      noValidate
      autoComplete="off"
    >
      {/* Image Column */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px', // Space between images
          maxWidth: '400px'
        }}
      >
        {/* Original Image */}
        <img 
          src={product.img} 
          alt={product.name} 
          style={{ width: '100%', height: 'auto' }} 
        />

        {/* Additional Images */}
        <img 
          src="https://i.ibb.co/SJ4RZSs/WORKS-Product-Shots-2-copy.png" // Replace with your second image URL
          alt="Additional Image 1" 
          style={{ width: '100%', height: 'auto'  }} 
        />

        <img 
          src="https://i.ibb.co/52jgJSS/WORKS-Logo-Tee-black-02.png" // Replace with your third image URL
          alt="Additional Image 2" 
          style={{ width: '100%', height: 'auto' }} 
        />
      </Box>

      {/* Product Details and Form */}
      <Box
        sx={{
          flexGrow: 1,
          marginLeft: { sm: '20px' } // Margin to the left of the images on larger screens
        }}
      >
        <h1>{product.name}</h1>
        <p>{product.price}</p>

        {/* TextField components */}
        <div>
        <TextField
  id="outlined-select-currency"
  select
  label="Select"
  defaultValue="EUR"
  helperText="Please select your currency"
  sx={{ fontFamily: 'Source Code Pro, monospace' }} // Apply font family here
>
  {currencies.map((option) => (
    <MenuItem key={option.value} value={option.value}>
      {option.label}
    </MenuItem>
  ))}
</TextField>


<TextField
  id="outlined-select-currency-native"
  select
  label="Native select"
  defaultValue="EUR"
  SelectProps={{
    native: true,
  }}
  InputProps={{
    sx: { 
      fontFamily: 'Source Code Pro, monospace' // Apply font family here
    }
  }}
>
  {currencies.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ))}
</TextField>
        </div>
      </Box>
    </Box>
  );
}
