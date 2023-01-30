import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [cartToggle, setCartToggle] = useState(false);

  const toggleCartHandler = () => {
    setCartToggle(!cartToggle);
  };
  return (
    <>
      {cartToggle && <Cart onCloseCart={toggleCartHandler} />}
      <Header onCartToggle={toggleCartHandler} />

      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
