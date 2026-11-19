import { useState } from "react";
import CartDisplay from "./components/CartDisplay.jsx";
import ProductCatalog from "./components/ProductCatalog.jsx";
import { products } from "./assets/products.js";

export default function App() {
  const [cart, setCart] = useState({});

  function addToCart(productId) {
    setCart((currentCart) => ({
      ...currentCart,
      [productId]: (currentCart[productId] ?? 0) + 1,
    }));
  }

  function removeFromCart(productId) {
    setCart((currentCart) => currentCart.filter((x) => x.id === productId))
  }

  const cartItems = products.flatMap((product) => {
    const quantity = cart[product.id] ?? 0;

    if (quantity === 0) {
      return [];
    }
    return [{
      ...product,
      quantity,
      subtotal: product.price * quantity,
    }];
  });

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.subtotal,
    0,
  );

  return (
    <main>
      <h1>HTE Plate Store</h1>
      <ProductCatalog products={products} onAddToCart={addToCart} />
      <CartDisplay
        items={cartItems}
        totalQuantity={totalQuantity}
        totalPrice={totalPrice}
        removeFromCart={removeFromCart}
      />
    </main>
  );
}
