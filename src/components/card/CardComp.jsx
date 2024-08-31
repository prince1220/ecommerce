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
    <Box sx={{ minWidth: 300, width: 300, height: 600, margin: 10, paddingLeft: 10}}>
      <Card variant="outlined">
        <React.Fragment>
          {/* Image Component */}
          <CardMedia
            component="img"
            height="400" // Adjust the height as needed
            image={img} // Use the img prop to set the image source
            alt={name} // Use the name prop for the alt text
            sx={{
              objectFit: "contain", // Ensures the image covers the container without distortion
              width: "100%",       // Ensures the image takes up the full width of the container
            }}
          />
          
          <CardContent>
            <Typography sx={{ fontSize: 10, display: "flex", alignItems: "center" }} color="text.secondary" gutterBottom>
              {label} <FiberManualRecordIcon style={{ color: color, height: 50, width: 10 }} />
            </Typography>
            <Typography variant="h7" component="div">
              {name}
            </Typography>
            <Typography color="text.secondary" variant="body2">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography color="#fffff" variant="h8">
              {price}
            </Typography>

            {isAvailable && !isInCart && (
              <Button
                onClick={() => {
                  setOrders((old_orders) => {
                    if (old_orders.find(item => item === id)) {
                      return old_orders;
                    } else {
                      return [...old_orders, id];
                    }
                  });
                }}
                color="warning"
                variant="contained"
                size="small"
              >
                Add
              </Button>
            )}

            {isAvailable && isInCart && (
              <Button
                onClick={() => {
                  setOrders((old_orders) => {
                    return old_orders.filter(item => item !== id);
                  });
                }}
                color="info"
                variant="contained"
                size="small"
              >
                Remove
              </Button>
            )}

            <Link to={"/product/" + id}>
              <Button>View</Button>
            </Link>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
