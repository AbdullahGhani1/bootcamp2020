import React from "react";

function Button(props) {
  return (
    <button
      className="btn"
      style={{
        backgroundColor: props.theme === true ? "white" : "black",
        color: props.theme === true ? "black" : "white",
      }}
      onClick={() =>
        props.setCount(props.title === "+" ? props.count + 1 : props.count - 1)
      }
    >
      {props.title}
    </button>
  );
}

export default Button;
