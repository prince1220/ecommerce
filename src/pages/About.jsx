import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import '@fontsource-variable/source-code-pro';

function About() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on small screens, horizontally on larger screens
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: '20px',
        fontFamily: "'Source Code Pro Variable', monospace", // Correct font-family syntax
        textAlign: { xs: 'center', sm: 'left' }, // Center text on small screens, left-align on larger screens
      }}
    >
      {/* Image Component on the left */}
      <Box
        sx={{
          marginRight: { sm: '20px', xs: 0 }, // Margin on the right only for larger screens
          marginBottom: { xs: '20px', sm: 0 }, // Margin at the bottom only for small screens
        }}
      >
        <img
  src="https://i.ibb.co/QrMwCgd/about.jpg" // Replace with your image URL
  alt="Description of the image"
  style={{
    width: '100%', // Make image responsive
    maxWidth: '350px', // Limit the maximum width of the image
    height: '500px', // Set the height of the container
    borderRadius: '0px',
    objectFit: 'cover', // Ensures the image covers the container while maintaining its aspect ratio
    objectPosition: 'center', // Center the image within the container
  }}
/>

      </Box>

      {/* Text Content on the right */}
      <Box sx={{ 
        fontFamily: "'Source Code Pro Variable', monospace", // Correct font-family syntax
        maxWidth: '600px' }}>
        <Typography variant="h6" sx={{ fontFamily: "'Source Code Pro Variable', monospace", marginBottom: '10px', color: 'black' }}>
          culpa qui officia deserunt mollitia animi, id est labo Nam libero tempore, cum soluta nobis.
        </Typography>
        <Typography
        variant="body1" sx={{
          fontFamily: "'Source Code Pro Variable', monospace", color: 'grey' }}>
          At vero eos et accusamus et iusto odio dignissimos
          ducimus qui blanditiis praesentium voluptatum deleniti
          atque corrupti quos dolores et quas molestias excepturi
          sint occaecati cupiditate non provident, similique sunt
          in culpa qui officia deserunt mollitia animi, id est laborum
          et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio. Nam libero tempore, cum soluta nobis est eligendi
          optio cumque nihil impedit quo minus id quod maxime placeat fa
          Et harum quidem rerum facilis est et expedita distinctio. Nam
          libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
          assumenda est, omnis dolor repellendus. Temporibus autem quibusdam
          et aut officiis debitis
        </Typography>
      </Box>

      {/* Copyright at the bottom */}
      <Box sx={{ position: 'absolute', bottom: '10px', width: '100%', textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          {'Copyright © '}
          <Link color="inherit" href="https://mui.com/">
            WORKS
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Box>
    </Box>
  );
}

export default About;
