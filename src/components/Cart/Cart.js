import React from "react";

import classes from "./Cart.module.css";

import { DUMMY_CART_ITEMS as CartItemData } from "../../DUMMY_DATA";
import Modal from "../UI/Modal";

const Cart = () => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {CartItemData.map((item) => (
        <li key={item.id}>{item.name} </li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>100 $</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
