import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import { Menu } from '@mui/material';
import Badge from '@mui/material/Badge';
import { Button } from '@mui/material';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useCart } from "@reflowhq/cart-react";

// Import your logo image
import logo from '../logo.png'; // Adjust the path as needed

const pages = [{ name: 'Home', route: "/" },{ name: 'Build', route: "/build" }, { name: 'Contact', route: "/contact" }, { name: 'About', route: "/about" }, { name: 'Cart', route: "/cart" } ];
const config = {
  projectID: "1472176007",
};
export default function Navbar2({ cards, orders, setOrders }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  
 const cart = useCart(config);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


 

  return (
    <Box
      sx={{
        fontFamily: "'Source Code Pro Variable', monospace",
        display: 'flex',
        justifyContent: 'space-between', // Distributes space evenly between items
        alignItems: 'center',
        padding: '0 20px', // Adds some padding on the left and right
        height: '10vh', // Optional: adjust the height of the navbar
        backgroundColor: '#f8f9fa', // Optional: add a background color to the navbar
      }}
    >
      {/* Logo */}
      <Box>
        <Link to="/">
          <img src={logo} alt="Logo" style={{ height: '50px' }} />
        </Link>
      </Box>

      {/* Links */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        {pages.map((page) => (
          <Link key={page.name} to={page.route} style={{ textDecoration: 'none', color: 'inherit', margin: '0 10px' }}>
            {page.name}
          </Link>
        ))}
      </Box>

      {/* Cart Icon */}
      <Box>
        <IconButton onClick={handleOpenUserMenu} size="large" aria-label="show cart items" color="inherit">
          <Badge badgeContent={cart.products.length} color="error">
            <ShoppingCartSharpIcon />
          </Badge>
        </IconButton>

        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {cart.products.map((product) => {
  
            
            return (
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" style={{display:"flex",gap:10,alignItems:"center",justifyContent:"space-around"}}>
                  <div>{product.name}</div> <div>{product.price} </div> <img width={64}  src={product.img1} />
                  <Button onClick={() => {
                    cart.removeLineItem(product.lineItemID)
                  }}>
                    Delete
                </Button>
                </Typography>
              </MenuItem>
            );
          })}
        </Menu>
      </Box>
    </Box>
  );
}
