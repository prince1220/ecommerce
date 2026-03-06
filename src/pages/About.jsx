import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import '@fontsource-variable/source-code-pro';

function About() {
  return (
    <Box sx={{ 
      backgroundColor: '#fff', 
      minHeight: '100vh', 
      fontFamily: "'Source Code Pro Variable', monospace",
      p: { xs: 2, md: 5 }
    }}>
      
      {/* Boxed Header - Styled after image_f5253e.png */}
      <Box sx={{ 
        backgroundColor: '#eeeeee', 
        p: 1.5, 
        mb: 6, 
        border: '1px solid #e0e0e0',
        width: '100%'
      }}>
        <Typography sx={{ 
          fontSize: '14px', 
          fontWeight: 'bold', 
          textTransform: 'uppercase', 
          letterSpacing: '1px' 
        }}>
          ABOUT WORKS
        </Typography>
      </Box>

      {/* Main Content Grid - Styled after image_f7099c.png and image_f62065.png */}
      <Grid container spacing={4} sx={{ borderTop: '1px solid #e0e0e0', pt: 4 }}>
        
        {/* Left Column: Image with Border */}
        <Grid item xs={12} md={5} sx={{ 
          borderRight: { md: '1px solid #e0e0e0' }, 
          pb: { xs: 4, md: 0 } 
        }}>
          <Box sx={{ p: { md: 2 } }}>
            <img
              src="https://i.ibb.co/QrMwCgd/about.jpg" 
              alt="About Works"
              style={{
                width: '80%',
                height: 'auto',
                filter: 'grayscale(1)', // Optional: match the monochromatic style
                border: '1px solid #e0e0e0',
                padding: '15px'
              }}
            />
          </Box>
        </Grid>

        {/* Right Column: Narrative Text */}
        <Grid item xs={12} md={7}>
          <Box sx={{ p: { md: 4 } }}>
            <Typography variant="h6" sx={{ 
              fontFamily: "inherit", 
              fontWeight: 'bold', 
              textTransform: 'uppercase',
              mb: 3, 
              color: 'black',
              fontSize: '13px'
            }}>
              QUALITY AND PURPOSE
            </Typography>
            
            <Typography variant="body1" sx={{ 
              fontFamily: "inherit", 
              fontWeight: '400', 
              color: '#333', 
              lineHeight: 1.8,
              fontSize: '13px',
              textAlign: 'justify'
            }}>
              At vero eos et accusamus et iusto odio dignissimos
              ducimus qui blanditiis praesentium voluptatum deleniti
              atque corrupti quos dolores et quas molestias excepturi
              sint occaecati cupiditate non provident, similique sunt
              in culpa qui officia deserunt mollitia animi, id est laborum
              et dolorum fuga. 
              <br /><br />
              Et harum quidem rerum facilis est et expedita
              distinctio. Nam libero tempore, cum soluta nobis est eligendi
              optio cumque nihil impedit quo minus id quod maxime placeat fa
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat facere possimus.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Grid-style Footer - Styled after image_f691fc.png */}
      <Box sx={{ 
        mt: 10, 
        pt: 4, 
        borderTop: '1px solid #e0e0e0', 
        textAlign: 'center' 
      }}>
        <Typography
          variant="body2"
          sx={{ 
            fontFamily: "inherit", 
            fontSize: '10px', 
            letterSpacing: '2px', 
            color: '#999' 
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

export default About;