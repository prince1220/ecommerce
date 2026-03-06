import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Menu, Badge, Button, MenuItem, Typography, Box } from '@mui/material';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import SearchIcon from '@mui/icons-material/Search'; 
import { useCart } from "@reflowhq/cart-react";

// Import your logo image
import logo from '../logo.png'; 

const pages = [
  { name: 'SHOP', route: "#", hasDropdown: true }, // Added flag for dropdown
  { name: 'BUILD', route: "/build" }, 
  { name: 'CONTACT', route: "/contact" }, 
  { name: 'ABOUT', route: "/about" }
];

const config = { projectID: "1472176007" };

export default function Navbar2() {
  const [anchorElCart, setAnchorElCart] = React.useState(null);
  const [anchorElShop, setAnchorElShop] = React.useState(null); // State for Shop menu
  const cart = useCart(config);

  const handleOpenCartMenu = (event) => setAnchorElCart(event.currentTarget);
  const handleCloseCartMenu = () => setAnchorElCart(null);

  const handleOpenShopMenu = (event) => setAnchorElShop(event.currentTarget);
  const handleCloseShopMenu = () => setAnchorElShop(null);

  return (
    <Box
      sx={{
        fontFamily: "'Source Code Pro', monospace",
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        borderBottom: '1px solid #e0e0e0',
        backgroundColor: '#fff',
        width: '100%',
        zIndex: 1100,
        position: 'relative'
      }}
    >
      {/* Left Section: Navigation Links */}
      <Box sx={{ display: 'flex', height: '100%' }}>
        {pages.map((page) => (
          page.hasDropdown ? (
            <Box 
              key={page.name}
              onClick={handleOpenShopMenu}
              sx={{ 
                cursor: 'pointer',
                color: '#000', 
                fontSize: '13px',
                letterSpacing: '1px',
                padding: '20px 25px',
                borderRight: '1px solid #e0e0e0',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: Boolean(anchorElShop) ? '#eeeeee' : 'transparent', // Match Home button gray
                transition: '0.2s'
              }}
            >
              {page.name}
            </Box>
          ) : (
            <Link 
              key={page.name} 
              to={page.route} 
              style={{ 
                textDecoration: 'none', 
                color: '#000', 
                fontSize: '13px',
                letterSpacing: '1px',
                padding: '20px 25px',
                borderRight: '1px solid #e0e0e0',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              {page.name}
            </Link>
          )
        ))}
      </Box>

      {/* Shop Dropdown Menu */}
      <Menu
        anchorEl={anchorElShop}
        open={Boolean(anchorElShop)}
        onClose={handleCloseShopMenu}
        disableScrollLock={true}
        PaperProps={{
          sx: {
            borderRadius: 0,
            border: '1px solid #e0e0e0',
            boxShadow: 'none',
            mt: '0px',
            '& .MuiList-root': { padding: 0 }
          }
        }}
      >
        <MenuItem 
          component={Link} 
          to="/season-1" 
          onClick={handleCloseShopMenu}
          sx={{ 
            fontFamily: "'Source Code Pro', monospace", 
            fontSize: '12px', 
            padding: '12px 30px',
            borderBottom: '1px solid #eee',
            '&:hover': { backgroundColor: '#eeeeee' }
          }}
        >
          SEASON_1
        </MenuItem>
        <MenuItem 
  component={Link}       // Tells MUI to use React Router's Link behavior
  to="/season-2"         // The URL destination
  onClick={handleCloseShopMenu} // Closes the dropdown when clicked
  sx={{ 
    fontFamily: "'Source Code Pro', monospace", 
    fontSize: '12px', 
    padding: '12px 30px',
    '&:hover': { backgroundColor: '#eeeeee' }
  }}
>
  SEASON_2
</MenuItem>
      </Menu>

      {/* Center Section: Logo */}
      <Box sx={{ padding: '10px 40px', borderRight: '1px solid #e0e0e0', borderLeft: '1px solid #e0e0e0' }}>
        <Link to="/">
          <img src={logo} alt="Logo" style={{ height: '50px', filter: 'grayscale(1)' }} />
        </Link>
      </Box>

      {/* Right Section: Search and Cart */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '100%', gap: 0 }}>
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          padding: '0 20px', 
          fontSize: '13px', 
          letterSpacing: '1px',
          height: '100%',
          borderLeft: '1px solid #e0e0e0',
          cursor: 'pointer'
        }}>
          <SearchIcon sx={{ fontSize: 18, mr: 1 }} /> SEARCH
        </Box>
        
        <Box 
          onClick={handleOpenCartMenu}
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            padding: '0 25px', 
            fontSize: '13px', 
            letterSpacing: '1px',
            height: '100%',
            borderLeft: '1px solid #e0e0e0',
            cursor: 'pointer'
          }}
        >
          <Badge 
            badgeContent={cart.products.length} 
            sx={{ 
              '& .MuiBadge-badge': { 
                backgroundColor: '#000', 
                color: '#fff',
                fontFamily: 'monospace',
                borderRadius: '0px'
              } 
            }}
          >
            <ShoppingCartSharpIcon sx={{ fontSize: 20 }} />
          </Badge>
          <Typography sx={{ ml: 1, fontSize: '13px', fontFamily: 'inherit' }}>CART</Typography>
        </Box>
      </Box>

      {/* Cart Menu Styling */}
      <Menu
        anchorEl={anchorElCart}
        open={Boolean(anchorElCart)}
        onClose={handleCloseCartMenu}
        PaperProps={{
          sx: {
            borderRadius: 0,
            border: '1px solid #000',
            boxShadow: 'none',
            mt: 1
          }
        }}
      >
        {cart.products.map((product) => (
          <MenuItem key={product.lineItemID} onClick={handleCloseCartMenu} sx={{ borderBottom: '1px solid #eee' }}>
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', fontFamily: 'monospace' }}>
              <img width={40} src={product.img1} alt={product.name} />
              <Typography sx={{ fontSize: '12px' }}>{product.name}</Typography>
              <Typography sx={{ fontSize: '12px', fontWeight: 'bold' }}>{product.price}</Typography>
              <Button 
                onClick={(e) => { e.stopPropagation(); cart.removeLineItem(product.lineItemID); }}
                sx={{ color: 'red', fontSize: '10px' }}
              >
                [X]
              </Button>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}