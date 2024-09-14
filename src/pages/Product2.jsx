import React from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  { value: 'small', label: 'S' },
  { value: 'medium', label: 'M' },
  { value: 'large', label: 'L' },
  { value: 'xlarge', label: 'XL' },
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
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Ensure the container takes up the full height of the screen
      }}
    >
      <Box
        component="form"
        sx={{
          fontFamily: "'Source Code Pro Variable', monospace",
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' }, // Stack column on small screens, row on larger screens
          alignItems: { sm: 'flex-start' }, // Align items to the start on larger screens
          justifyContent: 'space-between', // Space out the image column and the other content
          paddingTop: '100px', // Add padding to the top
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
            gap: '40px', // Space between images
            maxWidth: '400px',
          }}
        >
          {/* Original Image */}
          <img
  src={product.img}
  alt={product.name}
  style={{ width: '100%', height: 'auto' }}
/>
<img
  src={product.img2}
  alt={product.name}
  style={{ width: '100%', height: 'auto' }}
/>
<img
  src={product.img3}
  alt={product.name}
  style={{ width: '100%', height: 'auto' }}
/>
        
        </Box>

        {/* Product Details and Form */}
        <Box
  sx={{
    fontFamily: 'Source Code Pro, monospace',
    flexGrow: 1,
    marginLeft: { sm: '100px' }, // Margin to the left of the Box on larger screens
  }}
>
  <h1 style={{ marginBottom: '40px' }}>{product.name}</h1>
  <p style={{ marginBottom: '40px', fontWeight: 100 }}>{product.price}</p>
  <p style={{ marginBottom: '40px', fontWeight: 100 }}>{product.discription1}</p>
  <p style={{ marginBottom: '40px', fontWeight: 100 }}>{product.discription2}</p>
  <p style={{ marginBottom: '40px', fontWeight: 100 }}>{product.discription3}</p>
  <p style={{ marginBottom: '40px', fontWeight: 100 }}>{product.discription4}</p>

  {/* TextField components */}
  <div style={{ marginBottom: '16px' }}>
    <TextField
      id="outlined-select-currency"
      select
      label="size"
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
</Box>

      </Box>
    </Box>
  );
}
