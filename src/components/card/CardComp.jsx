import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function CardComp({
  setOrders,
  orders,
  id,
  name,
  description,
  price,
  isAvailable,
  img,
  hoverImg,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentHoverImg, setCurrentHoverImg] = useState(hoverImg);

  const replaceHoverImage = (newImageUrl) => {
    setCurrentHoverImg(newImageUrl);
  };

  const isInCart = orders.find((item) => item === id) !== undefined;
  const label = !isAvailable
    ? "Sold out"
    : isInCart
    ? "In-Cart"
    : "Available";
  const color = !isAvailable
    ? "orange"
    : isInCart
    ? "red"
    : "green";

  return (
    <Box
      sx={{
        minWidth: 300,
        width: 400,
        height: 600,
        margin: 10,
        paddingLeft: 23,
        fontFamily: "'Source Code Pro Variable', monospace",
      }}
    >
      <Card
        variant="none"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          textAlign: "center",
          padding: 2,
        }}
      >
<CardMedia
  component="img"
  alt={name}
  image={isHovered ? currentHoverImg : img} // Use dynamically updated hover image
  sx={{
    objectFit: "contain",
    width: "200%",
    maxHeight: "90%",
    transition: "0.3s ease-in-out",
  }}
  onMouseEnter={() => {
    setIsHovered(true);
    setCurrentHoverImg("https://i.ibb.co/SJ4RZSs/WORKS-Product-Shots-2-copy.png"); // Change image on hover
  }}
  onMouseLeave={() => {
    setIsHovered(false);
    setCurrentHoverImg(hoverImg); // Reset to original hover image
  }}
/>


        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
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
            {label}
          </Typography>
          <Typography>{name}</Typography>
          <Typography color="text.secondary" variant="body2">
            {description}
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            paddingBottom: 2,
          }}
        >
          <Typography color="text.primary">{price}</Typography>

          {isAvailable && isInCart && (
            <Button
              onClick={() =>
                setOrders((oldOrders) =>
                  oldOrders.filter((item) => item !== id)
                )
              }
              color="info"
              variant="contained"
              size="small"
            >
              Remove
            </Button>
          )}

          <Link to={`/product/${id}`}>
            <Button sx={{ fontSize: 14, color: "grey" }}>View</Button>
          </Link>

          <Button
            onClick={() =>
              replaceHoverImage("https://i.ibb.co/SJ4RZSs/WORKS-Product-Shots-2-copy.png")    
            }
            variant="contained"
            color="primary"
            sx={{ marginTop: 2 }}
          >
            Change Hover Image Now!
          </Button>
          
        </CardActions>
      </Card>
    </Box>
  );
}


