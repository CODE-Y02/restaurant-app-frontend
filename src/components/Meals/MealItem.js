import React from "react";
import classes from "./MealItem.module.css";
const MealItem = ({ name, description, price }) => {
  return (
    <li className={classes.meal}>
      <div className={classes.name}>{name}</div>
      <div className={classes.description}>{description}</div>
      <div className={classes.price}>{price}</div>
    </li>
  );
};

export default MealItem;
