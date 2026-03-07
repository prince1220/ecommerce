import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

/* Monospaced Button Component */
const DisableElevation = () => {
  return (
    <Button
      variant="contained"
      fullWidth
      disableElevation
      sx={{
        borderRadius: 0,
        fontFamily: "'Source Code Pro', monospace",
        backgroundColor: '#000', // Black background to match "SOLD OUT" button style
        color: '#fff', 
        p: 2,
        '&:hover': {
          backgroundColor: '#333',
        },
      }}
    >
      SUBMIT
    </Button>
  );
};

/* Contact Form Component */
const Contact = () => {
  return (
    <Box sx={{ 
      backgroundColor: '#fff', 
      minHeight: '100vh', 
      p: { xs: 2, md: 5 },
      fontFamily: "'Source Code Pro', monospace" 
    }}>
      {/* Boxed Header Style from image_f5253e.png */}
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
          CONTACT
        </Typography>
      </Box>

      <Grid container spacing={8} justifyContent="center">
        {/* Left Column: Info and Policy */}
        <Grid item xs={12} md={5}>
          <Box sx={{ color: '#000' }}>
            <Typography sx={{ fontWeight: 'bold', mb: 1, fontSize: '13px' }}>
              EMAIL US:
            </Typography>
            <Typography sx={{ mb: 4, fontFamily: 'inherit', fontSize: '13px' }}>
              works_wear@shop.com
            </Typography>

            <Typography sx={{ fontWeight: 'bold', mb: 1, fontSize: '13px' }}>
              RETURN POLICY:
            </Typography>
            <Typography sx={{ fontFamily: 'inherit', fontSize: '12px', lineHeight: 1.8, color: 'black' }}>
              Items must be returned within 14 days of delivery. All tags must remain attached. 
              Refunds are issued to the original payment method. Please allow up to 24 hours 
              for a reply from our customer service team.
            </Typography>
          </Box>
        </Grid>

        {/* Right Column: Input Fields */}
        <Grid item xs={12} md={5}>
          <Box component="form" noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              fullWidth
              label="NAME"
              variant="outlined"
              InputProps={{ style: { borderRadius: 0, fontFamily: 'inherit' } }}
              InputLabelProps={{ style: { fontFamily: 'inherit', fontSize: '12px' } }}
            />
            <TextField
              fullWidth
              label="EMAIL"
              variant="outlined"
              InputProps={{ style: { borderRadius: 0, fontFamily: 'inherit' } }}
              InputLabelProps={{ style: { fontFamily: 'inherit', fontSize: '12px' } }}
            />
            <TextField
              fullWidth
              label="MESSAGE"
              variant="outlined"
              multiline
              rows={6}
              InputProps={{ style: { borderRadius: 0, fontFamily: 'inherit' } }}
              InputLabelProps={{ style: { fontFamily: 'inherit', fontSize: '12px' } }}
            />
            <Box sx={{ mt: 2 }}>
              <DisableElevation />
            </Box>
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
};

export default Contact;