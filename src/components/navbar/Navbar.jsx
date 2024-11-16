import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Produtos</Link>
      <Link to="/services">Serviços</Link>
      <Link to="/contact">Contato</Link>
    </nav>
  );
}

export default Navbar;
