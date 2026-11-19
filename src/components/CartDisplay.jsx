import React from "react";
import OrderSummary from "../components/OrderSummary.jsx";
import { formatPrice } from "../utils/formatPrice.js";

export default function CartDisplay({ items, totalQuantity, totalPrice, removeFromCart }) {
  return (
    <section aria-labelledby="cart-heading" aria-live="polite">
      <h2 id="cart-heading">Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{formatPrice(item.subtotal)}</td>
                <td><button onClick={removeFromCart(item.id)} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <OrderSummary totalQuantity={totalQuantity} totalPrice={totalPrice} />
    </section>
  );
}
