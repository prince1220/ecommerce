import React, { useState } from "react";
import CardComp from "./CardComp";

const products = [
  {
    id: 1,
    name: "TRIPPIE LOGO",
    description: "Trippie Logo Tee Black",
    price: "$35",
    isAvailable: true,
    img: "https://i.ibb.co/jvfBFzY/Untitled-2-03.png",
    hoverImg: "https://i.ibb.co/SJ4RZSs/WORKS-Product-Shots-2-copy.png",
  },
  {
    id: 2,
    name: "TRIPPIE LOGO",
    description: "Trippie Logo Tee Green",
    price: "$35",
    isAvailable: true,
    img: "https://i.ibb.co/d5qq1yX/Untitled-2-02.png",
    hoverImg: "https://i.ibb.co/zHJLcZY/WORKS-Product-Shots-4.png",
  },
  {
    id: 3,
    name: "TRIPPIE LOGO",
    description: "Trippie Logo Tee Blue",
    price: "$35",
    isAvailable: false,
    img: "https://i.ibb.co/7XwHMJW/Untitled-2-01.png",
    hoverImg: "https://i.ibb.co/TwCSxF5/WORKS-Product-Shots-3.png",
  },
  {
    id: 4,
    name: "TECH-9",
    description: "Tech-9 Tee",
    price: "$35",
    isAvailable: true,
    img: "https://i.ibb.co/cYZnMwx/Untitled.png",
    hoverImg: "https://i.ibb.co/Gt602dh/WORKS-Product-Shots-2.png",
  },
];

export default function ProductList() {
  const [orders, setOrders] = useState([]);

  return (
    <div>
      {products.map((product) => (
        <CardComp
          key={product.id}
          setOrders={setOrders}
          orders={orders}
          id={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          isAvailable={product.isAvailable}
          img={product.img}
          hoverImg={product.hoverImg} 
        />
      ))}
    </div>
  );
}
