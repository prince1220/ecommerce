import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function About() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        padding: '20px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row', // Align image and text horizontally
          alignItems: 'center',
          textAlign: 'left', // Align text to the left
          maxWidth: '80%', // Limits the width of the entire content
        }}
      >
        {/* Image Component on the left */}
        <Box sx={{ marginRight: '20px' }}>
          <img
            src="https://via.placeholder.com/300" // Replace with your image URL
            alt="Description of the image"
            style={{ width: '300px', height: '500px', borderRadius: '8px' }}
          />
        </Box>

        {/* Text Content on the right */}
        <Box>
          <Typography variant="h5" sx={{ marginBottom: '10px', color: 'black', maxWidth: '600px' }}>
            culpa qui officia deserunt mollitia animi, 
            id est labo Nam libero tempore, cum soluta nobis.
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey', maxWidth: '600px' }}>
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
