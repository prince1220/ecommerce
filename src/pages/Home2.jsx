// src/pages/Home.js
import React from 'react';
import CardList from '../components/card/CardList';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Home({cards, orders, setOrders, searchQ, pricesRange}) {
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      backgroundColor: '#fff'
    }}>
      
      {/* 1. Hero Image Section */}
      <Box sx={{ 
        width: { xs: '90%', md: '90%' }, 
        mx: 'auto', 
        px: { xs: 2, md: 5 }, 
        pt: 16, 
        pb: 2,
        borderBottom: '1px solid #e0e0e0' 
      }}>
        {/* <Box sx={{
          border: '1px solid #e0e0e0', 
          padding: '10px',
          backgroundColor: '#fff',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <img 
            src="https://i.ibb.co/Pvmtkfrx/IMG-3766.jpg" 
            alt="Works Wear Hero" 
            style={{ 
              width: '100%', 
              height: 'auto', 
              maxHeight: '550px', 
              objectFit: 'cover',
              filter: 'grayscale(40%)' 
            }} 
          />
        </Box> */}
      </Box>

      {/* 2. Main Content Area - Centered 3-Column Grid */}
      <Box sx={{ 
        flexGrow: 1, 
        width: '100%', 
        maxWidth: '1800px', // Allow enough width for 3 large images + gaps
        mt: 1,
        px: 2
      }}>
        <CardList 
          cards={cards} 
          orders={orders} 
          setOrders={setOrders} 
          pricesRange={pricesRange} 
          searchQ={searchQ} 
        />
      </Box>

      {/* 3. Footer */}
      <Box sx={{ 
        width: '100%',
        mt: 10, 
        pt: 4, 
        pb: 4,
        borderTop: '1px solid #e0e0e0', 
        textAlign: 'center',
        fontFamily: "'Source Code Pro Variable', monospace"
      }}>
        <Typography
          variant="body2"
          sx={{ 
            fontFamily: "inherit", 
            fontSize: '10px', 
            letterSpacing: '2px', 
            color: '#999',
            textTransform: 'uppercase'
          }}
        >
          {'© '}
          <Link color="inherit" href="/" sx={{ textDecoration: 'none', fontWeight: 'bold' }}>
            WORKS
          </Link>{' '}
          {new Date().getFullYear()} — ALL RIGHTS RESERVED.
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;