import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { id: 1, name: "Ração Premium", price: "R$50,00" },
  { id: 2, name: "Brinquedo para Cães", price: "R$30,00" },
];

function ProductList() {
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
