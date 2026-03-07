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
          fontSize: '13px', 
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

export default About;