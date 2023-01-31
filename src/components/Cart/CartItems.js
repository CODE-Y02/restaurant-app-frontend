import React from "react";

import classes from "./CartItems.module.css";

const CartItem = ({ item }) => {
  return (
    <li className={classes.cartItem}>
      <div className={classes.details}>
        <h2>{item.name}</h2>
        <div className={classes.details_info}>
          <span className={classes.price}>{item.price} $</span>

          <span className={classes.qty}>
            Qty: <span>{item.quantity}</span>
          </span>
        </div>
      </div>
      <div className={classes.controls}>
        <button>+</button>
        <button>-</button>
      </div>
    </li>
  );
};

const CartItems = ({ className, items }) => {
  // console.log(items);
  return (
    <ul className={className}>
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default CartItems;

// id: 'm2', name: 'Schnitzel', description: 'A german specialty!', price: 16.5, quantity: 3}
