// src/pages/Home.js
import React from 'react';
import CardList from '../components/card/CardList';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Home({cards, orders, setOrders, searchQ, setSearchQ, setPricesRange, pricesRange}) {
  
  return (
    <Box sx={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      backgroundColor: 'black' 
    }}>
      
     {/* 1. Hero Image Section */}
     <Box sx={{ 
        width: { xs: '90%', md: '90%' }, 
        mx: 'auto', 
        px: { xs: 2, md: 5 }, 
        pt: 5, 
        pb: 2,
        borderBottom: '1px solid #333' 
      }}>
        <Box sx={{
          border: '1px solid #333', 
          padding: '15px',
          backgroundColor: '#000',
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
              display: 'block',
              filter: 'grayscale(60%) contrast(1.2)' 
            }} 
          />
        </Box>
      </Box>

    {/* 2. Blinking Aluminized Home Text */}
    <Box sx={{ 
        width: '100%', 
        display: 'flex',
        justifyContent: 'center',
        pt: 3, // Reduced from 5
        pb: 1  // Reduced from 2
      }}>
        <Typography 
          sx={{ 
            fontSize: '13px', 
            fontFamily: "'Source Code Pro Variable', monospace",
            fontWeight: '400',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            background: 'linear-gradient(to bottom, #ffffff 0%, #a1a1a1 50%, #ffffff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'pulse 1.9s ease-in-out infinite',
            '@keyframes pulse': {
              '0%': { opacity: 1, filter: 'brightness(1)' },
              '50%': { opacity: 0.2, filter: 'brightness(0.5)' },
              '100%': { opacity: 1, filter: 'brightness(1)' }
            }
          }}
        >
          HOME
        </Typography>
      </Box>

      {/* 3. Main Content Spacer - Shrinking this reduces overall vertical gap */}
      <Box sx={{ height: '20px' }} /> 

     {/* 4. Grid-style Footer */}
     <Box sx={{ 
        width: '100%',
        mt: 2, 
        pt: 4, 
        pb: 4,
        borderTop: '1px solid #333', 
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