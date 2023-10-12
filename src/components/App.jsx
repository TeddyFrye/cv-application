import { useState } from "react";
import "../styles/App.css";
import Greeting from "./Greeting.jsx";
import Animals from "./Animals.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Greeting />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {count} click, ah ah ah.
        </button>
      </div>
      <Animals />
    </>
  );
}

export default App;
