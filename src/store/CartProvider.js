import { useState } from "react";
import CartContext from "./cart-context";
// import { DUMMY_CART_ITEMS } from "../DUMMY_DATA";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addToCartHandler = (item) => {
    let itemIdx = items.findIndex((itm) => itm.id === item.id);
    let newItem = [...items];

    // console.log("item >>>>>", item);

    if (itemIdx >= 0) {
      //item exist
      // console.log(typeof newItem[itemIdx].quantity);
      newItem[itemIdx].quantity += item.quantity;
    } else {
      // console.log(item);
      newItem.push(item);
    }

    setItems(newItem);

    const total = Math.round(item.price * item.quantity);

    setTotalAmount((oldTotal) => oldTotal + total);
  };

  const removeFromCartHandler = (id) => {
    const itemIdx = items.findIndex((itm) => itm.id === id);

    let newItems = [...items];
    const item = items[itemIdx].quantity;
    if (item > 1) {
      newItems[itemIdx].quantity--;
    } else {
      newItems = newItems.filter((itm) => itm.id !== id);
    }

    const total = Math.round(item.price * item.quantity);
    setItems(newItems);
    setTotalAmount((oldTotal) => oldTotal - total);
  };

  const cartContext = {
    items: items,
    totalAmount: totalAmount,
    addItem: addToCartHandler,
    removeItem: removeFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
