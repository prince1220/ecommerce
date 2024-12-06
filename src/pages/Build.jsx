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
    title: '1',
  },
  {
    img: 'https://i.ibb.co/rpNYzTG/IMG-3850.jpg" alt="IMG-3850" border="0">',
    title: '2',
  },

  {
    img: 'https://i.ibb.co/QXWt8DJ/WORKS-Product-Shots.jpg" alt="WORKS-Product-Shots" border="0">',
    title: '3',
  },

  {
    img: 'https://i.ibb.co/5FKXZby/WORKS-Randoms-15.png" alt="WORKS-Randoms-15" border="0">',
    title: '4',
  },
 
  {
    img: 'https://i.ibb.co/5KYXH1V/IMG-3396.png" alt="IMG-3396" border="0">',
    title: '5',
  },

  {
    img: 'https://i.ibb.co/ZcX9N2R/IMG-3864.jpg" alt="IMG-3864" border="0">',
    title: '6',
  },
];
