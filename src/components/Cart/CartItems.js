import React from "react";
import CartItem from "./CartItem";

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
