import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia"; // Import CardMedia for image handling
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { grey } from "@mui/material/colors";

export default function CardComp({ setOrders, orders, id, name, description, price, isAvailable, img }) {
  let isInCart = orders.find(item => item === id) !== undefined;
  let label, color;

  if (!isAvailable) {
    label = "Sold out";
    color = "orange";
  } else if (isInCart) {
    label = "In-Cart";
    color = "red";
  } else {
    label = "Available";
    color = "green";
  }

  return (
    <Box
      sx={{
        minWidth: 300,
        width: 400,
        height: 600,
        margin: 10,
        paddingLeft: 23,
        fontFamily: "'Source Code Pro Variable', monospace", // Apply font family to the entire card
      }}
    >
    <Card
  variant="none"
  sx={{
    display: "flex", // Enables flexbox layout
    flexDirection: "column", // Stacks children vertically
    alignItems: "center", // Centers all children horizontally
    justifyContent: "center", // Centers all children vertically
    height: "100%", // Ensures the card fills its container
    textAlign: "center", // Centers text in the card
    padding: 2, // Optional padding for spacing
  }}
>
  {/* Image Component */}
  <CardMedia
  component="img"
  image={img}
  alt={name}
  sx={{
    objectFit: "contain",
    width: "200%",
    maxHeight: "90%", // Adjust to control proportional size
  }}
/>


  <CardContent
    sx={{
      display: "flex", // Enables flexbox layout
      flexDirection: "column", // Stacks content vertically
      alignItems: "center", // Centers content horizontally
      justifyContent: "center", // Centers content vertically
      textAlign: "center", // Centers text in the content
    }}
  >
    <Typography
      sx={{
        fontSize: 10,
        display: "flex",
        alignItems: "center",
      }}
      color="text.secondary"
      gutterBottom
    >
      {/* Optional label or icon */}
    </Typography>
    <Typography variant="" component="div">
      {name}
    </Typography>
    <Typography color="text.secondary" variant="body2">
      {description}
    </Typography>
  </CardContent>

  <CardActions
    sx={{
      display: "flex",
      justifyContent: "center", // Centers the actions horizontally
      flexDirection: "column", // Stacks buttons vertically
      alignItems: "center", // Centers the buttons
      paddingBottom: 2,
    }}
  >
    <Typography variant="" color="text.primary">
      {price}
    </Typography>

    {isAvailable && isInCart && (
      <Button
        onClick={() => {
          setOrders((old_orders) => old_orders.filter((item) => item !== id));
        }}
        color="info"
        variant="contained"
        size="small"
      >
        Remove
      </Button>
    )}

    <Link to={`/product/${id}`}>
      <Button  sx={{
         fontSize: 14, color: 'grey',
       
         
      
    }}
      
      >View</Button>
    </Link>
  </CardActions>
</Card>

    </Box>
  );
 }  