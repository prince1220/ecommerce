import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";




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

  // ✅ Define a fallback hover image
  const fallbackHoverImg =
    "https://i.ibb.co/Gt602dh/WORKS-Product-Shots-2.png";

  const imageToUseOnHover = hoverImg || fallbackHoverImg;

  // ✅ Preload hover image (corrected syntax)
  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = imageToUseOnHover;
  }, [imageToUseOnHover]);

  const isInCart = orders.find((item) => item === id) !== undefined;
  const label = !isAvailable
    ? "Sold out"
    : isInCart
    ? "In-Cart"
    : "Available";

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
          image={isHovered ? imageToUseOnHover : img}
          sx={{
            objectFit: "contain",
            width: "200%",
            maxHeight: "90%",
            transition: "0.3s ease-in-out",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
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
            sx={{ fontSize: 10, display: "flex", alignItems: "center" }}
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
        </CardActions>
      </Card>
    </Box>
  );
}
