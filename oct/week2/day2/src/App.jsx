import React, { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  let handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="max-w-7xl mx-auto">
      App
      <br />

      <div className="w-40 p-3 shadow-2xl border">
        <p>Count {count}</p>

        <button
          className="p-1 rounded-xl bg-gray-700"
          onClick={handleClick}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
