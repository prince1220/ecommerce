import React from 'react'
import { Link } from 'react-router-dom'
import IconButton from '@mui/material/IconButton';
import {Menu } from '@mui/material';
import Badge from '@mui/material/Badge';
import {Button} from '@mui/material';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
const pages = [{name:'Products',route:"/"}, {name:'Contact',route:"/contact"}, {name:'Cart',route:"/cart"}, {name:'About',route:"/about"}];

export default function Navbar2({cards,orders,setOrders}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);


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
    <div>

      {pages.map(page=>{
        return <Link to={page.route}>{page.name}</Link>
      })}

      <div>
      <IconButton onClick={handleOpenUserMenu} size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={orders.length} color="error">
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
              {orders.map((order) => {
            
                const card=cards.find(item=>item.id==order)
            
               return <MenuItem key={order} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center"> {card.name} - {card.price} <Button onClick={()=>{
                    setOrders((old_orders)=>{
                      //[1,2,3,5]   ///5
                      return old_orders.filter(item=>item !=order)
                    })
                  }}> Delete</Button></Typography>
                </MenuItem>
              
            })}
            </Menu>


      </div>
    </div>
  )
}
