import React from "react";

const Dinner = (props) => {
  const menu = ["Chicken", "Beef", "Fish"];
  const { dish } = props;
  return (
    <h1>
      Today's Dinner Menu {menu[0]}, {dish}
    </h1>
  );
};

export default Dinner;
