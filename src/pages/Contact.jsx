import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

/* Button Component */
const DisableElevation = () => {
  return (
    <Button
      variant="contained"
      disableElevation
      sx={{
        fontFamily: "'Source Code Pro Variable', monospace",
        backgroundColor: '#FFFFFF', // Background color
        color: '#757575', // Text color
        border: '1px solid #757575', // Outline color and thickness
        '&:hover': {
          backgroundColor: '#FAFAFA', // Lighter background shade on hover
          color: '#FAFAFA', // Text color on hover
          borderColor: '#757575', // Darker outline on hover
        },
      }}
    >
      Submit
    </Button>
  );
};

/* Contact Form Component */
const Contact = () => {
  return (
    <div>
      <Grid container spacing={4} justifyContent="center" alignItems="flex-start" sx={{ mt: 4 }}>
        {/* Grid item for Text Container */}
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              p: 2,
              backgroundColor: 'none',
              borderRadius: 1,
              color: '#757575', 
            }}
          >
            <Typography variant="h5"   sx={{
              fontFamily: "'Source Code Pro Variable', monospace",
              color: 'black', 
            }} gutterBottom>
              
              <h5>Contact Information</h5>
            
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: "'Source Code Pro Variable', monospace"}} >
              works_wear@shop.com
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: "'Source Code Pro Variable', monospace", color: 'black', mt: 2 }}>
             <h5>Return Policy</h5>
            </Typography>
            <Typography variant="body1"sx={{ fontFamily: "'Source Code Pro Variable', monospace"}}>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
            qui officia deserunt mollit anim id est laborum."
            </Typography>
          </Box>
        </Grid>

        {/* Grid item for Form Fields */}
        <Grid item xs={12} md={5}>
          <Box
            component="form"
            sx={{
              fontFamily: "'Source Code Pro Variable', monospace",
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              '& > :not(style)': { m: 1, width: '100%' }, // Adjust the width to match the container
            }}
            noValidate
            autoComplete="off"
          >
         <TextField
  id="outlined-basic"
  label="Name"
  variant="outlined"
  sx={{
    '& .MuiInputBase-root': {
      fontFamily: "'Source Code Pro Variable', monospace", // Change font family here
    },
    '& .MuiInputLabel-root': {
      fontFamily: "'Source Code Pro Variable', monospace", // Change font family for the label
    },
  }}
/>

<TextField
  id="outlined-basic"
  label="Email"
  variant="outlined"
  sx={{
    '& .MuiInputBase-root': {
      fontFamily: "'Source Code Pro Variable', monospace", // Change font family here
    },
    '& .MuiInputLabel-root': {
      fontFamily: "'Source Code Pro Variable', monospace", // Change font family for the label
    },
  }}
/>
          </Box>

          <Box
            component="form"
            sx={{
              fontFamily: "'Source Code Pro Variable', monospace",
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mt: 0,
              mb: 1,
              '& > :not(style)': { m: 3, width: '100%', height: 'auto' }, // Adjust width and height
            }}
            noValidate
            autoComplete="off"
          >
           <TextField
  id="outlined-basic"
  label="Message"
  variant="outlined"
  multiline
  rows={8}
  sx={{
    '& .MuiInputBase-root': {
      fontFamily: "'Source Code Pro Variable', monospace", // Font family for the input text
    },
    '& .MuiInputLabel-root': {
      fontFamily: "'Source Code Pro Variable', monospace", // Font family for the label
    },
  }}
/>
          </Box>

          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
            <DisableElevation />
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          fontFamily: "'Source Code Pro Variable', monospace",
          mt: 4,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
       <Typography
  variant="body2"
  color="text.secondary"
  align="center"
  sx={{ fontFamily: "'Source Code Pro Variable', monospace" }} // Apply font family here
>
  {'Copyright © '}
  <Link color="inherit" href="https://mui.com/">
    WORKS
  </Link>{' '}
  {new Date().getFullYear()}
  {'.'}
</Typography>
      </Box>
    </div>
  );
};

export default Contact;
