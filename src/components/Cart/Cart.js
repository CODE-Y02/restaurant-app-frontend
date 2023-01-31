import React, { useContext } from "react";

import classes from "./Cart.module.css";

// import { DUMMY_CART_ITEMS as CartItemData } from "../../DUMMY_DATA";

import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItems from "./CartItems";

const Cart = ({ onCloseCart }) => {
  const cartCtx = useContext(CartContext);

  // const cartItems = (
  //   <ul className={classes["cart-items"]}>
  //     {cartCtx.items.map((item) => (
  //       <li key={item.id}>{item.name}</li>
  //     ))}
  //   </ul>
  // );

  const totalAmount = cartCtx.items.reduce((currTotal, itm) => {
    currTotal += Math.round(itm.price * itm.quantity);
    return currTotal;
  }, 0);

  return (
    <Modal onClose={onCloseCart}>
      <CartItems className={classes["cart-items"]} items={cartCtx.items} />
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount} $</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onCloseCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
