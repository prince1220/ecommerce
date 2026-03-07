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
      
      {/* Main Content Area - Centered Grid */}
      <Box sx={{ 
        flexGrow: 1, 
        width: '100%', 
        maxWidth: '1800px', 
        pt: 12, // Added top padding to replace the space left by the Hero
        px: 2,
        pb: 4
      }}>
        <CardList 
          cards={cards} 
          orders={orders} 
          setOrders={setOrders} 
          pricesRange={pricesRange} 
          searchQ={searchQ} 
        />
      </Box>

     {/* 4. Grid-style Footer */}
     <Box sx={{ 
        width: '100%',
        mt: 2, 
        pt: 4, 
        pb: 4,
        borderTop: '1px solid #e0e0e0', 
        textAlign: 'center',
        fontFamily: "'Source Code Pro Variable', monospace"
      }}>
        {/* Instagram Link Section */}
        <Box sx={{ mb: 2 }}>
          <Link 
            href="https://instagram.com/yourhandle" 
            target="_blank" 
            rel="noopener noreferrer"
            sx={{ 
              color: '#666', 
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              fontSize: '10px',
              letterSpacing: '1px',
              transition: '0.2s',
              '&:hover': {
                color: '#fff', // Glows white on hover against the black bg
              }
            }}
          >
            {/* Simple Instagram SVG for a clean look */}
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            INSTAGRAM
          </Link>
        </Box>

        <Typography
          variant="body2"
          sx={{ 
            fontFamily: "inherit", 
            fontSize: '10px', 
            letterSpacing: '2px', 
            color: '#666',
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