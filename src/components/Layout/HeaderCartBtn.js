import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartBtn.module.css";

const HeaderCartBtn = ({ onClick }) => {
  const cartCtx = useContext(CartContext);

  const cartItemNumber = cartCtx.items.reduce((currNum, item) => {
    return currNum + item.quantity;
  }, 0);

  // console.log(cartCtx.items);

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}> {cartItemNumber}</span>
    </button>
  );
};

export default HeaderCartBtn;
