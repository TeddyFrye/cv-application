import React, { useState } from "react";
import GeneralInfo from "./GeneralInfo/GeneralInfo.jsx";
import EducationalExperience from "./EducationalExperience/EducationalExperience.jsx";
import PracticalExperience from "./PracticalExperience/PracticalExperience.jsx";
import "../styles/App.css";

function App() {
  const [someState, setSomeState] = useState(null);

  return (
    <div className="App">
      <h1>CV Application</h1>
      <GeneralInfo />
      <EducationalExperience />
      <PracticalExperience />
    </div>
  );
}

export default App;
