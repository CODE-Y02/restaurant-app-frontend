import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = ({ id, item }) => {
  const cartCtx = useContext(CartContext);

  const addItemToCart = () => {
    // get qty
    const quantity = Number(document.getElementById("amount" + id).value) || 0;
    cartCtx.addItem({ ...item, quantity });
  };

  return (
    <form className={classes.mealForm}>
      <Input
        label="Amount"
        input={{
          id: "amount" + id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />

      <button type="button" onClick={addItemToCart}>
        + Add
      </button>
    </form>
  );
};

export default MealItemForm;
