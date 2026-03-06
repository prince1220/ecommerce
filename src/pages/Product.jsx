import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useCart } from "@reflowhq/cart-react";

const config = { projectID: "1472176007" };
const sizes = ['Small', 'Medium', 'Large', 'Extra Large', '2XL'];

export default function Product({ cards, setOrders, orders }) {
  const { id } = useParams();
  const navigate = useNavigate(); // 2. Initialize the navigate function
  const cart = useCart(config);
  const [selectedSize, setSelectedSize] = useState('Small');

  if (!cards || cards.length === 0) {
    return <Box sx={{ p: 4, fontFamily: 'monospace' }}>Getting product details...</Box>;
  }

  const product = cards.find(el => el.id == id);
  if (!product) return <Box sx={{ p: 4, fontFamily: 'monospace' }}>Product not found</Box>;

  // Function to handle adding to both Reflow and your local state
  const handleAddToCart = () => {
    cart.addProduct({ id: product.cart_id });
    // Update local state if the item isn't already in the orders array
    if (!orders.includes(product.id)) {
      setOrders([...orders, product.id]);
    }
  };

  return (
    <Box sx={{ 
      backgroundColor: '#fff', 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      fontFamily: "'Source Code Pro', monospace" 
    }}>
      
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr' },
        borderTop: '1px solid #e0e0e0'
      }}>
        
        {/* Left Column: Images */}
        <Box sx={{ borderRight: '1px solid #e0e0e0', padding: '0px' }}>
          {[product.img1, product.img2, product.img3].map((img, index) => (
            <Box key={index} sx={{ 
              borderBottom: '1px solid #e0e0e0', 
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              p: 4
            }}>
              <img src={img} alt={`Product ${index}`} style={{ width: '100%', maxWidth: '600px', height: 'auto' }} />
            </Box>
          ))}
        </Box>

        {/* Right Column: Sticky Details */}
        <Box sx={{ padding: '40px', position: 'sticky', top: 0, height: 'fit-content' }}>
          
          <Box sx={{ backgroundColor: '#eeeeee', p: 1, mb: 2, border: '1px solid #e0e0e0' }}>
            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {product.name}
            </Typography>
          </Box>
          
          <Typography sx={{ fontWeight: '300',fontSize: '14px', mb: 4 }}> {product.price}</Typography>

          {/* Size Selection */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
            {sizes.map((size) => (
              <Button
                key={size}
                onClick={() => setSelectedSize(size)}
                sx={{
                  borderRadius: 0,
                  border: '1px solid #e0e0e0',
                  color: selectedSize === size ? '#fff' : '#000',
                  backgroundColor: selectedSize === size ? '#000' : 'transparent',
                  fontFamily: 'inherit',
                  fontWeight: '400',
                  fontSize: '12px',
                  padding: '5px 15px',
                  '&:hover': { backgroundColor: selectedSize === size ? '#333' : '#f5f5f5', borderColor: '#000' }
                }}
              >
                {size}
              </Button>
            ))}
          </Box>

          {/* ADD TO CART */}
          <Button
            fullWidth
            onClick={handleAddToCart} // Using the combined function
            sx={{
              borderRadius: 0,
              backgroundColor: '#000',
              color: '#fff',
              p: 2,
              mb: 2,
              fontFamily: 'inherit',
              fontWeight: '300',
              '&:hover': { backgroundColor: '#333' }
            }}
          >
            ADD TO CART
          </Button>

          {/* CHECKOUT - Linked to /cart */}
          <Button
            fullWidth
            variant="outlined"
            onClick={() => navigate('/cart')} // 3. Programmatic navigation
            sx={{
              borderRadius: 0,
              borderColor: '#e0e0e0',
              color: '#000',
              p: 2,
              mb: 6,
              fontFamily: 'inherit',
              fontWeight: '300',
              '&:hover': { borderColor: '#000', backgroundColor: 'transparent' }
            }}
          >
            CHECKOUT
          </Button>

          {/* Description */}
          <Typography sx={{ fontSize: '13px', fontWeight: 'bold', mb: 2 }}>Product Description</Typography>
          <Box component="ul" sx={{ fontSize: '12px', pl: 2, lineHeight: 2, color: '#333' }}>
            <li>{product.description1}</li>
            <li>{product.description2}</li>
            <li>{product.description3}</li>
            <li>MADE IN HAITI</li>
          </Box>
          
          <Typography 
            sx={{ mt: 4, fontSize: '11px', cursor: 'pointer', textDecoration: 'underline' }}
            onClick={() => navigate('/')} // Navigate home
          >
            BACK TO SHOP
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}