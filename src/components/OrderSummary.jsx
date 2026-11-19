import React from "react";
import { formatPrice } from "../utils/formatPrice.js";

export default function OrderSummary({ totalQuantity, totalPrice }) {
  return (
    <section aria-labelledby="summary-heading">
      <h3 id="summary-heading">Order Summary</h3>
      <p>Total quantity: {totalQuantity}</p>
      <p>Total price: {formatPrice(totalPrice)}</p>
    </section>
  );
}
