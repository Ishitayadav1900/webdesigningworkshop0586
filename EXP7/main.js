// App.jsx
import { useState } from "react";

function App() {

  // useState with initial value 0
  const [count, setCount] = useState(0);

  // Increment function
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement function
  const decrement = () => {
    setCount(count - 1);
  };

  // Reset function
  const reset = () => {
    setCount(0);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ color: "blue" }}>
        React Counter Application
      </h1>

      {/* Display counter value */}
      <h2 style={{ color: "green" }}>
        Counter Value: {count}
      </h2>

      <button
        onClick={increment}
        style={{
          margin: "10px",
          padding: "10px 20px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Increment
      </button>

      <button
        onClick={decrement}
        style={{
          margin: "10px",
          padding: "10px 20px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Decrement
      </button>

      <button
        onClick={reset}
        style={{
          margin: "10px",
          padding: "10px 20px",
          backgroundColor: "gray",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;