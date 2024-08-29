import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

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
          src="https://via.placeholder.com/300" // Replace with your image URL
          alt="Description of the image"
          style={{
            width: '100%', // Make image responsive
            maxWidth: '300px', // Limit the maximum width of the image
            height: '500px', // Maintain aspect ratio
            borderRadius: '8px',
            
          }}
        />
      </Box>

      {/* Text Content on the right */}
      <Box sx={{ maxWidth: '600px' }}>
        <Typography variant="h6" sx={{ marginBottom: '10px', color: 'black' }}>
          culpa qui officia deserunt mollitia animi, id est labo Nam libero tempore, cum soluta nobis.
        </Typography>
        <Typography variant="body1" sx={{ color: 'grey' }}>
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
