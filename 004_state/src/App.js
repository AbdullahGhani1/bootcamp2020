import "./App.css";
import React, { useState } from "react";
function App() {
  let [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>React State</h1>
      <button onClick={() => setCount(++count)}>+</button>
      <span>Counter : {count}</span>
      <button onClick={() => setCount(--count)}>-</button>
    </div>
  );
}

export default App;
