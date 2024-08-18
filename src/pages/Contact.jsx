import React from 'react';
import TextField from '@mui/material/TextField';
import Box  from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';



/*TODO complete styling the contact page*/
const Contact = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          mt: 4,
        }}
      >
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > :not(style)': { m: 1, width: '25ch' },
            mr: 50,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
        </Box>
        

        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 0,
            '& > :not(style)': { m: 3, width: '75ch', height: '50ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Message" variant="outlined" multiline rows={8} />
        </Box>

        <Box
          sx={{
            mt: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
              Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Contact;

