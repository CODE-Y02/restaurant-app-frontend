import React from "react";
import classes from "./Card.module.css";
const Card = (props) => {
  const { children, className } = props;

  return <div className={`${className} ${classes.card}`}>{children}</div>;
};

export default Card;
