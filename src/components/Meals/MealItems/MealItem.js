import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = ({ name, description, price }) => {
  return (
    <li className={classes.meal}>
      <div>
        <div className={classes.name}>{name}</div>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealItemForm />
    </li>
  );
};

export default MealItem;
