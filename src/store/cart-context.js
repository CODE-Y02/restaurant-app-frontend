import { createContext } from "react";

const CartContext = createContext({
  // this is just skilleton helps in auto complete
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
