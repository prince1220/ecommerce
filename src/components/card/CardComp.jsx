import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function CardComp({ setOrders, orders, id, name, description, price, isAvailable, img }) {
  // Logic to check if item is in cart
  const isInCart = orders.find(item => item === id) !== undefined;

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "500px", // Limits width to allow gaps in a 3-column setup
        fontFamily: "'Source Code Pro', monospace",
        border: "1px solid #e0e0e0",
        backgroundColor: "#fff",
        position: "relative",
        transition: "transform 0.2s ease-in-out, border-color 0.2s",
        "&:hover": {
          borderColor: "#000",
          transform: "translateY(-4px)" // Subtle lift on hover
        }
      }}
    >
      {/* Status Label (Sold Out) */}
      {!isAvailable && (
        <Box sx={{
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "#b3b3b3",
          color: "#fff",
          padding: "2px 8px",
          fontSize: "10px",
          zIndex: 2,
          textTransform: "uppercase"
        }}>
          Sold Out
        </Box>
      )}

      {/* Image Container */}
      <Link to={"/product/" + id} style={{ textDecoration: 'none' }}>
        <Box sx={{ 
          height: 600, // Large image height as requested
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center",
          p: 2,
          borderBottom: "1px solid #e0e0e0",
          overflow: "hidden"
        }}>
          <img 
            src={img} 
            alt={name} 
            style={{ 
              maxWidth: "100%", 
              maxHeight: "100%", 
              objectFit: "contain" 
            }} 
          />
        </Box>
      </Link>

      {/* Content Section */}
      <Box sx={{ p: 2 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 1 }}>
          <Typography 
            sx={{ 
              fontSize: "13px", 
              fontWeight: "bold", 
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontFamily: "inherit"
            }}
          >
            {name}
          </Typography>
          <Typography 
            sx={{ 
              fontSize: "13px", 
              fontFamily: "inherit" 
            }}
          >
            {price}
          </Typography>
        </Box>

        <Typography 
          sx={{ 
            fontSize: "11px", 
            color: "#666", 
            mb: 2,
            fontFamily: "inherit",
            lineHeight: 1.4,
            height: "32px", // Fixed height to keep buttons aligned
            overflow: "hidden"
          }}
        >
          {description}
        </Typography>

        {/* Action area */}
        <Box sx={{ display: "flex", borderTop: "1px solid #e0e0e0", mx: -2, mt: 1 }}>
          <Link 
            to={"/product/" + id} 
            style={{ 
              flex: 1, 
              textAlign: "center", 
              padding: "10px", 
              textDecoration: "none", 
              color: "#000",
              fontSize: "12px",
              borderRight: "1px solid #e0e0e0",
              textTransform: "uppercase"
            }}
          >
            Details
          </Link>
          {isAvailable && (
            <Box 
              onClick={() => {
                if(isInCart) {
                  setOrders(orders.filter(item => item !== id));
                } else {
                  setOrders([...orders, id]);
                }
              }}
              sx={{ 
                flex: 1, 
                textAlign: "center", 
                padding: "10px", 
                cursor: "pointer",
                fontSize: "12px",
                textTransform: "uppercase",
                backgroundColor: isInCart ? "#000" : "transparent",
                color: isInCart ? "#fff" : "#000",
                transition: "0.2s",
                '&:hover': {
                  backgroundColor: isInCart ? "#333" : "#f5f5f5"
                }
              }}
            >
              {isInCart ? "Remove" : "Add"}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}