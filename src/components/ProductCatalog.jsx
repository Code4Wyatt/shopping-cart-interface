import React from "react";
import { formatPrice } from "../utils/formatPrice.js";

export default function ProductCatalog({ products, onAddToCart }) {
  return (
    <section aria-labelledby="catalog-heading">
      <h2 id="catalog-heading">Product Catalog</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{formatPrice(product.price)}</td>
              <td>
                <button type="button" onClick={() => onAddToCart(product.id)}>
                  Add to Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
