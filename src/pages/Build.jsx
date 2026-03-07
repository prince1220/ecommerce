import * as React from 'react';
import { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '@fontsource-variable/source-code-pro';

export default function WovenImageList() {
  const [activeItem, setActiveItem] = useState(itemData[0]);

  // Logic to handle previous/next toggling
  const handleToggle = (direction) => {
    const currentIndex = itemData.findIndex((item) => item.img === activeItem.img);
    let nextIndex;

    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % itemData.length; // Loops back to start
    } else {
      nextIndex = (currentIndex - 1 + itemData.length) % itemData.length; // Loops to end
    }
    setActiveItem(itemData[nextIndex]);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '100vh', backgroundColor: '#fff', padding: '20px' }}>
      
      {/* 1. Large Main Display Area with Navigation Arrows */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', // Centers arrows vertically relative to the image
        width: '100%', 
        maxWidth: 800, // Increased to give arrows room on the sides
        justifyContent: 'center',
        mb: 2 
      }}>
        
        {/* Left Arrow */}
        <IconButton onClick={() => handleToggle('prev')} sx={{ color: '#000', mr: 1 }}>
          <ArrowBackIosNewIcon sx={{ 
        fontSize: '1rem', 
        stroke: "#000", 
        strokeWidth: 0.3 // Lower values make it thinner
          }} />
        </IconButton>

        <Box sx={{ width: '100%', maxWidth: 600 }}>
          {/* The Frame Container */}
          <Box sx={{ 
            border: '1px solid #e0e0e0', 
            padding: '15px',             
            backgroundColor: '#fff',     
            mb: 1 
          }}>
            <img
              src={activeItem.img}
              alt={activeItem.title}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'cover',
              }}
            />
          </Box>
          
          {/* Info bar */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderTop: '1px solid #e0e0e0' }}>
            <Typography variant="caption" sx={{ fontFamily: "'Source Code Pro', monospace", textTransform: 'uppercase' }}>
              {activeItem.location || 'Location Info'}
            </Typography>
            <Typography variant="caption" sx={{ fontFamily: "'Source Code Pro', monospace", textTransform: 'uppercase' }}>
              {itemData.findIndex(i => i.img === activeItem.img) + 1} / {itemData.length}
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ padding: '10px 0' }}>
             <Typography variant="caption" sx={{ fontFamily: "'Source Code Pro', monospace", textTransform: 'uppercase' }}>
              Model: {activeItem.model || 'N/A'}
            </Typography>
          </Box>
        </Box>

        {/* Right Arrow */}
        <IconButton onClick={() => handleToggle('next')} sx={{ color: '#000', ml: 1 }}>
          <ArrowForwardIosIcon sx={{ fontSize: '1rem', stroke: "#000", 
        strokeWidth: 0.3 }} />
        </IconButton>
      </Box>

      {/* 2. Horizontal Thumbnail Strip */}
      <ImageList 
        sx={{ 
          width: '100%', maxWidth: 800, flexWrap: 'nowrap', overflowX: 'auto',
          '&::-webkit-scrollbar': { display: 'none' } 
        }} 
        cols={itemData.length} 
        gap={1}
      >
        {itemData.map((item, index) => (
          <ImageListItem 
            key={`${item.img}-${index}`} 
            onClick={() => setActiveItem(item)}
            sx={{ 
              cursor: 'pointer', width: 80, height: 100,
              opacity: activeItem.img === item.img ? 1 : 0.6,
              transition: 'opacity 0.3s ease',
              '&:hover': { opacity: 1 }
            }}
          >
            <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </ImageListItem>
        ))}
      </ImageList>

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

const itemData = [
  { img: 'https://i.ibb.co/QXWt8DJ/WORKS-Product-Shots.jpg', title: '1', location: 'Canadian Rockies', model: 'Alana Derksen' },
  { img: 'https://i.ibb.co/5FKXZby/WORKS-Randoms-15.png', title: '2', location: 'Studio A', model: 'Unknown' },
  { img: 'https://i.ibb.co/zh5bb4r/IMG-3769.jpg', title: '3', location: 'Commercial Site', model: 'N/A' },
  { img: 'https://i.ibb.co/rpNYzTG/IMG-3850.jpg', title: '4', location: 'Urban Setting', model: 'James Doe' },
  { img: 'https://i.ibb.co/8x7xYBV/IMG-3398.png', title: '5', location: 'Outdoor Forest', model: 'Jane Smith' },
  { img: 'https://i.ibb.co/B2FZTJL0/IMG-3399.png', title: '6', location: 'Mountain Peak', model: 'John Doe' },
  { img: 'https://i.ibb.co/Tx1DN5Tg/WORKS-Randoms-14.png', title: '7', location: 'Mountain Peak', model: 'John Doe' }
];