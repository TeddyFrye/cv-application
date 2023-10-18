import { useState } from "react";
import "../styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <App />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {count} click, ah ah ah!
        </button>
      </div>
    </>
  );
}

export default App;
