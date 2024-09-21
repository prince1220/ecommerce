import { useParams } from "react-router-dom";

export default function ProductDetails({ cards }) {
  const { id } = useParams();
  const product = cards.find(card => card.id === id);

  if (!product) return <h2>Product not found!</h2>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.img} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      
    </div>
  );
}
