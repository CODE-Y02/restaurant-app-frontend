import { useContext } from "react";
import classes from "./CartItem.module.css";

import CartContext from "../../store/cart-context";

const CartItem = ({ item }) => {
  const { name, price, quantity, id } = item;
  const cartCtx = useContext(CartContext);

  // as we already have item we just need to increase qty

  const removeCartItem = () => {
    cartCtx.removeItem(id);
  };

  const addCartItem = () => {
    cartCtx.addItem({ ...item, quantity: 1 });
  };

  return (
    <li className={classes.cartItem}>
      <div className={classes.details}>
        <h2>{name}</h2>
        <div className={classes.details_info}>
          <span className={classes.price}>{price} $</span>

          <span className={classes.qty}>
            Qty: <span>{quantity}</span>
          </span>
        </div>
      </div>
      <div className={classes.controls}>
        <button onClick={addCartItem}>+</button>
        <button onClick={removeCartItem}>-</button>
      </div>
    </li>
  );
};

export default CartItem;
