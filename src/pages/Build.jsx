import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Box from '@mui/material/Box';

export default function WovenImageList() {
  return (
    <Box
      sx={{
        display: 'flex', // Enables flexbox
        justifyContent: 'center', // Centers horizontally
        alignItems: 'center', // Centers vertically
        height: '100vh', // Makes the container full height of the viewport
        textAlign: 'center', // Optional for text alignment
      }}
    >
      <ImageList sx={{ width: 700, height: 800 }} variant="list" cols={1} gap={400}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=161&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://i.ibb.co/zh5bb4r/IMG-3769.jpg" alt="IMG-3769" border="0">',
    title: 'Bed',
  },
  {
    img: 'https://i.ibb.co/bKJPvvB/WORKS-Power-Plant-01.jpg" alt="WORKS-Power-Plant-01" border="0">',
    title: 'Kitchen',
  },
  {
    img: 'https://i.ibb.co/5FKXZby/WORKS-Randoms-15.png" alt="WORKS-Randoms-15" border="0">',
    title: 'Sink',
  },
 
  {
    img: 'https://i.ibb.co/8x7xYBV/IMG-3398.png" alt="IMG-3398" border="0">',
    title: 'Chairs',
  },

];
