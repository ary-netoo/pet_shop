import React from "react";

function ProductCard({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button>Comprar</button>
    </div>
  );
}

export default ProductCard;
