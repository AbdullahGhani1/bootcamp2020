import "./App.css";
import React, { useState } from "react";
import Counter from "./components/Counter";
import day from "./images/day.jpg";
import night from "./images/night.jpg";
import Button from "./components/Button";
function App() {
  let [count, setCount] = useState(0);
  const [theme, setTheme] = useState(true);
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${theme === true ? night : day})`,
        backgroundSize: "cover",
        color: theme === true ? "white" : "black",
      }}
    >
      <nav className="App-header">
        <h1>React State</h1>
        <button
          onClick={() => {
            setTheme(!theme);
          }}
          className="toggle"
        >
          {theme === true ? "Night" : "Day"}
        </button>
      </nav>
      <div
        style={{
          display: "flex",
          height: "90%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* <button
          className="btn"
          style={{
            backgroundColor: theme === true ? "white" : "black",
            color: theme === true ? "black" : "white",
          }}
          onClick={() => setCount(++count)}
        >
          +
        </button> */}
        <div>
          <Button setCount={setCount} count={count} title={"+"} theme={theme} />

          <Counter counter={count} />
          <Button setCount={setCount} count={count} title={"-"} theme={theme} />
        </div>

        {/* <button
          className="btn"
          style={{
            backgroundColor: theme === true ? "white" : "black",
            color: theme === true ? "black" : "white",
          }}
          onClick={() => setCount(--count)}
        >
          -
        </button> */}
        <div>
          <button
            style={{
              backgroundColor: theme === true ? "white" : "black",
              color: theme === true ? "black" : "white",
              padding: 30,
              border: "none",
              borderRadius: 10,
              marginTop: 20,
              fontSize: 20,
              cursor: "pointer",
            }}
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
