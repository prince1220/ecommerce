import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Menu, Badge, Button, MenuItem, Typography, Box, Drawer, List, ListItem, Collapse } from '@mui/material';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import SearchIcon from '@mui/icons-material/Search'; 
import MenuIcon from '@mui/icons-material/Menu'; // Added for mobile
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useCart } from "@reflowhq/cart-react";

import logo from '../logo.png'; 

const pages = [
  { name: 'SHOP', route: "#", hasDropdown: true },
  { name: 'BUILD', route: "/build" }, 
  { name: 'CONTACT', route: "/contact" }, 
  { name: 'ABOUT', route: "/about" }
];

const config = { projectID: "1472176007" };

export default function Navbar2() {
  const [anchorElCart, setAnchorElCart] = React.useState(null);
  const [anchorElShop, setAnchorElShop] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileShopOpen, setMobileShopOpen] = React.useState(false);
  
  const cart = useCart(config);

  const handleOpenCartMenu = (event) => setAnchorElCart(event.currentTarget);
  const handleCloseCartMenu = () => setAnchorElCart(null);

  const handleOpenShopMenu = (event) => setAnchorElShop(event.currentTarget);
  const handleCloseShopMenu = () => setAnchorElShop(null);

  const toggleDrawer = (open) => () => setMobileOpen(open);

  return (
    <Box
      sx={{
        fontFamily: "'Source Code Pro', monospace",
        display: 'grid',
        // Responsive columns: Sidebar logic for mobile, 3-column for desktop
        gridTemplateColumns: { xs: 'auto 1fr auto', md: '1fr auto 1fr' },
        alignItems: 'center',
        borderBottom: '1px solid #e0e0e0',
        backgroundColor: '#fff',
        width: '100%',
        zIndex: 1100,
        position: 'relative'
      }}
    >
      {/* --- MOBILE NAVIGATION ICON --- */}
      <Box sx={{ display: { xs: 'flex', md: 'none' }, borderRight: '1px solid #e0e0e0', height: '100%' }}>
        <IconButton onClick={toggleDrawer(true)} sx={{ borderRadius: 0, px: 2 }}>
          <MenuIcon />
        </IconButton>
      </Box>

      {/* --- DESKTOP LEFT SECTION --- */}
      <Box sx={{ display: { xs: 'none', md: 'flex' }, height: '100%' }}>
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
                backgroundColor: Boolean(anchorElShop) ? '#eeeeee' : 'transparent',
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

      {/* Shop Dropdown Menu (Desktop) */}
      <Menu
        anchorEl={anchorElShop}
        open={Boolean(anchorElShop)}
        onClose={handleCloseShopMenu}
        disableScrollLock={true}
        PaperProps={{
          sx: { borderRadius: 0, border: '1px solid #e0e0e0', boxShadow: 'none', mt: '0px', '& .MuiList-root': { padding: 0 } }
        }}
      >
        <MenuItem component={Link} to="/season-1" onClick={handleCloseShopMenu} sx={{ fontFamily: "'Source Code Pro', monospace", fontSize: '12px', padding: '12px 30px', borderBottom: '1px solid #eee' }}>
          SEASON 1
        </MenuItem>
        <MenuItem component={Link} to="/season-2" onClick={handleCloseShopMenu} sx={{ fontFamily: "'Source Code Pro', monospace", fontSize: '12px', padding: '12px 30px' }}>
          SEASON 2
        </MenuItem>
      </Menu>

      {/* --- CENTER SECTION: LOGO --- */}
      <Box sx={{ 
        padding: '10px 20px', 
        borderRight: { xs: 'none', md: '1px solid #e0e0e0' }, 
        borderLeft: { xs: 'none', md: '1px solid #e0e0e0' },
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Link to="/">
          <img src={logo} alt="Logo" style={{ height: '40px', filter: 'grayscale(1)' }} />
        </Link>
      </Box>

      {/* --- RIGHT SECTION --- */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '100%' }}>
        {/* Search - Hidden on very small screens, or icon only */}
        <Box sx={{ 
          display: { xs: 'none', sm: 'flex' }, 
          alignItems: 'center', 
          padding: '0 20px', 
          fontSize: '13px', 
          height: '100%',
          borderLeft: '1px solid #e0e0e0',
          cursor: 'pointer'
        }}>
          <SearchIcon sx={{ fontSize: 18 }} /> 
        </Box>
        
        <Box 
          onClick={handleOpenCartMenu}
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            padding: '0 20px', 
            fontSize: '13px', 
            height: '100%',
            borderLeft: '1px solid #e0e0e0',
            cursor: 'pointer'
          }}
        >
          <Badge badgeContent={cart.products.length} sx={{ '& .MuiBadge-badge': { backgroundColor: '#000', color: '#fff', borderRadius: '0px' } }}>
            <ShoppingCartSharpIcon sx={{ fontSize: 20 }} />
          </Badge>
          <Typography sx={{ ml: 1, fontSize: '11px', display: { xs: 'none', sm: 'block' } }}>CART</Typography>
        </Box>
      </Box>

      {/* --- MOBILE DRAWER --- */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{ sx: { width: 280, borderRadius: 0 } }}
      >
        <Box sx={{ p: 2, textAlign: 'center', borderBottom: '1px solid #eee' }}>
            <Typography sx={{ fontWeight: 'bold', letterSpacing: '2px', fontSize: '14px' }}>MENU</Typography>
        </Box>
        <List sx={{ pt: 0 }}>
          {pages.map((page) => (
            <React.Fragment key={page.name}>
              <ListItem 
                button 
                onClick={page.hasDropdown ? () => setMobileShopOpen(!mobileShopOpen) : toggleDrawer(false)}
                component={page.hasDropdown ? 'div' : Link}
                to={page.hasDropdown ? undefined : page.route}
                sx={{ py: 2, borderBottom: '1px solid #f5f5f5', display: 'flex', justifyContent: 'space-between' }}
              >
                <Typography sx={{ fontSize: '13px', letterSpacing: '1px' }}>{page.name}</Typography>
                {page.hasDropdown && <ExpandMoreIcon sx={{ transform: mobileShopOpen ? 'rotate(180deg)' : 'none', transition: '0.3s' }} />}
              </ListItem>
              
              {page.hasDropdown && (
                <Collapse in={mobileShopOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button component={Link} to="/season-1" onClick={toggleDrawer(false)} sx={{ pl: 4, py: 2, backgroundColor: '#fafafa', borderBottom: '1px solid #eee' }}>
                      <Typography sx={{ fontSize: '12px' }}>SEASON 1</Typography>
                    </ListItem>
                    <ListItem button component={Link} to="/season-2" onClick={toggleDrawer(false)} sx={{ pl: 4, py: 2, backgroundColor: '#fafafa', borderBottom: '1px solid #eee' }}>
                      <Typography sx={{ fontSize: '12px' }}>SEASON 2</Typography>
                    </ListItem>
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
      </Drawer>

      {/* Cart Menu (Logic unchanged) */}
      <Menu anchorEl={anchorElCart} open={Boolean(anchorElCart)} onClose={handleCloseCartMenu} PaperProps={{ sx: { borderRadius: 0, border: '1px solid #000', boxShadow: 'none' } }}>
        {cart.products.map((product) => (
          <MenuItem key={product.lineItemID} onClick={handleCloseCartMenu} sx={{ borderBottom: '1px solid #eee' }}>
             <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <img width={40} src={product.img1} alt={product.name} />
              <Typography sx={{ fontSize: '12px' }}>{product.name}</Typography>
              <Button onClick={(e) => { e.stopPropagation(); cart.removeLineItem(product.lineItemID); }} sx={{ color: 'red', fontSize: '10px' }}>[X]</Button>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}