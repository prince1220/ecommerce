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
import { useState } from "react";

export default function CardComp({
  setOrders, orders, id, name, description, price, isAvailable, img, hoverImg
}) {
  const [isHovered, setIsHovered] = useState(false);

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
          image={isHovered ? hoverImg : img}
          alt={name}
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
            sx={{
              fontSize: 10,
              display: "flex",
              alignItems: "center",
            }}
            color="text.secondary"
            gutterBottom
          ></Typography>
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
                setOrders(old_orders => old_orders.filter(item => item !== id))
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
