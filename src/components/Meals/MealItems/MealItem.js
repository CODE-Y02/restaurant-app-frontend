import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const { name, description, price, id } = props;
  return (
    <li className={classes.meal}>
      <div>
        <div className={classes.name}>{name}</div>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealItemForm id={id} item={props} />
    </li>
  );
};

export default MealItem;
