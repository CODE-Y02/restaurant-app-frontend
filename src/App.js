import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartToggle, setCartToggle] = useState(false);

  const toggleCartHandler = () => {
    setCartToggle(!cartToggle);
  };
  return (
    <CartProvider>
      {cartToggle && <Cart onCloseCart={toggleCartHandler} />}
      <Header onCartToggle={toggleCartHandler} />

      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
