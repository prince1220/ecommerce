import React from 'react';
import Box from '@mui/material/Box';

function About() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        paddingBottom: '20px', // Adds space at the bottom
      }}
    >
      <h1 
        style={{ 
          marginLeft: '10px',  
          marginBottom: '0px', 
          paddingLeft: '10px', 
          paddingBottom: '5px',
          color: 'black'  
        }}
      >
        About Page
      </h1>
      <p 
        style={{ 
          marginLeft: '400px', 
          marginRight: '400px', 
          marginBottom: '10px', 
          paddingLeft: '10px', 
          paddingBottom: '20px',
          color: 'grey'
        }}
      >
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
      </p>

      {/* Image Component at the bottom */}
      <Box sx={{ marginTop: '20px' }}>
        <img 
          src="https://via.placeholder.com/300" // Replace with your image URL
          alt="Description of the image"
          style={{ width: '500px', height: '300px', borderRadius: '8px' }}
        />
      </Box>
    </Box>
  );
}

export default About;
